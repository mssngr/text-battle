import merge from 'lodash/merge'
import { Status, Distance, WeaponTypes } from '../../types'
import {
  subTargetDescriptions,
  generateAimedDescriptions,
  genericBashDescriptions,
} from '../utils'

// Descriptions
function generateBashDescriptions(subTargetNames: string[]) {
  const bashDescriptions = [
    ...genericBashDescriptions,
    "From the ground, you wrestle your USER_WEAPON in front of you. You swing it towards TARGET's SUB_TARGET.",
    "You manage to grasp your USER_WEAPON, and you quickly slug it at TARGET's SUB_TARGET.",
    "Without bothering to get up, you sling your USER_WEAPON directly at TARGET's SUB_TARGET.",
  ]
  return bashDescriptions.reduce(
    (accum: string[], description) =>
      accum.concat(generateAimedDescriptions(subTargetNames, description)),
    []
  )
}

const NearAnyBash = {
  BASH_LEG: generateBashDescriptions(subTargetDescriptions.LEG),
}

const NearOnFeetBashLong = {
  BASH_HEAD: generateBashDescriptions(subTargetDescriptions.HEAD),
  BASH_TORSO: generateBashDescriptions(subTargetDescriptions.TORSO),
  BASH_RIGHT_ARM: generateBashDescriptions(subTargetDescriptions.RIGHT_ARM),
  BASH_LEFT_ARM: generateBashDescriptions(subTargetDescriptions.LEFT_ARM),
}

const NearGroundedBash = {
  BASH_HEAD: generateBashDescriptions(subTargetDescriptions.HEAD),
  BASH_TORSO: generateBashDescriptions(subTargetDescriptions.TORSO),
  BASH_ARM: generateBashDescriptions(subTargetDescriptions.ARM),
}

const bash = {
  [WeaponTypes.BOW]: NearAnyBash,
  [WeaponTypes.SPEAR]: NearAnyBash,
  [WeaponTypes.STAFF]: NearAnyBash,
  [WeaponTypes.HALBERD]: NearAnyBash,
  [WeaponTypes.LONG_AXE]: NearAnyBash,
  [WeaponTypes.SHORT_AXE]: NearAnyBash,
  [WeaponTypes.CLUB]: NearAnyBash,
}

const bashOnFeet = {
  [WeaponTypes.SPEAR]: NearOnFeetBashLong,
  [WeaponTypes.STAFF]: NearOnFeetBashLong,
  [WeaponTypes.HALBERD]: NearOnFeetBashLong,
  [WeaponTypes.LONG_AXE]: NearOnFeetBashLong,
}

const bashGrounded = {
  [WeaponTypes.BOW]: NearGroundedBash,
  [WeaponTypes.SPEAR]: NearGroundedBash,
  [WeaponTypes.STAFF]: NearGroundedBash,
  [WeaponTypes.HALBERD]: NearGroundedBash,
  [WeaponTypes.LONG_AXE]: NearGroundedBash,
  [WeaponTypes.SHORT_AXE]: NearGroundedBash,
  [WeaponTypes.CLUB]: NearGroundedBash,
}

const nearOnFeet = merge(bash, bashOnFeet)
const nearGrounded = merge(bash, bashGrounded)

// Export
export default {
  [Distance.NEAR]: {
    [Status.READY]: nearOnFeet,
    [Status.GRAPPLING]: nearOnFeet,
    [Status.OFF_BALANCE]: nearOnFeet,
    [Status.ON_GROUND]: nearGrounded,
    [Status.ON_TOP]: nearGrounded,
    [Status.ON_BOTTOM]: nearGrounded,
  },
}
