import merge from 'lodash/merge'
import { Status, Distance, WeaponTypes } from '../../types'
import {
  subTargetDescriptions,
  generateAimedDescriptions,
  genericBowDescriptions,
} from '../utils'

// Descriptions
function generateBowDescriptions(subTargetNames: string[]) {
  const bowDescriptions = [
    ...genericBowDescriptions,
    "From the ground, you wrestle your bow in front of you. You let a desperate arrow fly towards TARGET's SUB_TARGET.",
    "You manage to nock an arrow, and you quickly send it to TARGET's SUB_TARGET.",
    "Without bothering to get up, you fire an arrow directly at TARGET's SUB_TARGET.",
  ]
  return bowDescriptions.reduce(
    (accum: string[], description) =>
      accum.concat(generateAimedDescriptions(subTargetNames, description)),
    []
  )
}

const AnyAnyBow = {
  SHOOT_HEAD: generateBowDescriptions(subTargetDescriptions.HEAD),
  SHOOT_TORSO: generateBowDescriptions(subTargetDescriptions.TORSO),
  SHOOT_LEG: generateBowDescriptions(subTargetDescriptions.LEG),
}

const AnyOnFeetBow = {
  SHOOT_RIGHT_ARM: generateBowDescriptions(subTargetDescriptions.RIGHT_ARM),
  SHOOT_LEFT_ARM: generateBowDescriptions(subTargetDescriptions.LEFT_ARM),
}

const AnyGroundedBow = {
  SHOOT_ARM: generateBowDescriptions(subTargetDescriptions.ARM),
}

const bow = {
  [WeaponTypes.BOW]: AnyAnyBow,
}

const bowOnFeet = {
  [WeaponTypes.BOW]: AnyOnFeetBow,
}

const bowGrounded = {
  [WeaponTypes.BOW]: AnyGroundedBow,
}

const nearOnFeet = merge(bow, bowOnFeet)
const nearGrounded = merge(bow, bowGrounded)

// Export
export default {
  [Distance.FAR]: {
    [Status.READY]: bow,
    [Status.GRAPPLING]: bow,
    [Status.OFF_BALANCE]: bow,
    [Status.ON_GROUND]: bow,
    [Status.ON_TOP]: bow,
    [Status.ON_BOTTOM]: bow,
  },
  [Distance.NEAR]: {
    [Status.READY]: nearOnFeet,
    [Status.GRAPPLING]: nearOnFeet,
    [Status.OFF_BALANCE]: nearOnFeet,
    [Status.ON_GROUND]: nearGrounded,
    [Status.ON_TOP]: nearGrounded,
    [Status.ON_BOTTOM]: nearGrounded,
  },
}
