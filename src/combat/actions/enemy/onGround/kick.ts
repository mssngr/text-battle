import merge from 'lodash/merge'
import { Status, Distance, WeaponTypes } from '../../types'
import {
  subTargetDescriptions,
  generateAimedDescriptions,
  genericKickDescriptions,
} from '../utils'

// Descriptions
function generateKickDescriptions(subTargetNames: string[]) {
  const kickDescriptions = [
    ...genericKickDescriptions,
    "From the ground, you wriggle your legs out from under you. You swing them towards TARGET's SUB_TARGET.",
    "You manage to raise your leg, quickly kicking it out at TARGET's SUB_TARGET.",
    "Without bothering to get up, you kick your leg directly at TARGET's SUB_TARGET.",
  ]
  return kickDescriptions.reduce(
    (accum: string[], description) =>
      accum.concat(generateAimedDescriptions(subTargetNames, description)),
    []
  )
}

const NearAnyKick = {
  BASH_TORSO: generateKickDescriptions(subTargetDescriptions.TORSO),
  BASH_LEG: generateKickDescriptions(subTargetDescriptions.LEG),
}

const NearGroundedKick = {
  BASH_HEAD: generateKickDescriptions(subTargetDescriptions.HEAD),
  BASH_ARM: generateKickDescriptions(subTargetDescriptions.ARM),
}

const kick = {
  [WeaponTypes.FEET]: NearAnyKick,
}

const kickGrounded = {
  [WeaponTypes.FEET]: NearGroundedKick,
}

const nearGrounded = merge(kick, kickGrounded)

// Export
export default {
  [Distance.NEAR]: {
    [Status.READY]: kick,
    [Status.GRAPPLING]: kick,
    [Status.OFF_BALANCE]: kick,
    [Status.ON_GROUND]: nearGrounded,
    [Status.ON_TOP]: nearGrounded,
    [Status.ON_BOTTOM]: nearGrounded,
  },
}
