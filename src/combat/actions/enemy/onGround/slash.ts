import merge from 'lodash/merge'
import { Status, Distance, WeaponTypes } from '../../types'
import {
  subTargetDescriptions,
  generateAimedDescriptions,
  genericSlashDescriptions,
} from '../utils'

// Descriptions
function generateSlashDescriptions(subTargetNames: string[]) {
  const slashDescriptions = [
    ...genericSlashDescriptions,
    "From the ground, you wrestle your USER_WEAPON in front of you. You slash it at TARGET's SUB_TARGET.",
    "You manage to grasp your USER_WEAPON, and you quickly swing it at TARGET's SUB_TARGET.",
    "Without bothering to get up, you slice your USER_WEAPON directly at TARGET's SUB_TARGET.",
  ]
  return slashDescriptions.reduce(
    (accum: string[], description) =>
      accum.concat(generateAimedDescriptions(subTargetNames, description)),
    []
  )
}

const NearAnySlash = {
  SLASH_LEGS: generateSlashDescriptions(subTargetDescriptions.LEGS),
}

const NearOnFeetSlashLong = {
  SLASH_HEAD: generateSlashDescriptions(subTargetDescriptions.HEAD),
  SLASH_TORSO: generateSlashDescriptions(subTargetDescriptions.TORSO),
  SLASH_RIGHT_ARM: generateSlashDescriptions(subTargetDescriptions.RIGHT_ARM),
  SLASH_LEFT_ARM: generateSlashDescriptions(subTargetDescriptions.LEFT_ARM),
}

const NearGroundedSlash = {
  SLASH_HEAD: generateSlashDescriptions(subTargetDescriptions.HEAD),
  SLASH_TORSO: generateSlashDescriptions(subTargetDescriptions.TORSO),
  SLASH_ARM: generateSlashDescriptions(subTargetDescriptions.ARM),
}

const slash = {
  [WeaponTypes.BOW]: NearAnySlash,
  [WeaponTypes.SPEAR]: NearAnySlash,
  [WeaponTypes.STAFF]: NearAnySlash,
  [WeaponTypes.HALBERD]: NearAnySlash,
  [WeaponTypes.LONG_AXE]: NearAnySlash,
  [WeaponTypes.SHORT_AXE]: NearAnySlash,
  [WeaponTypes.CLUB]: NearAnySlash,
}

const slashOnFeet = {
  [WeaponTypes.SPEAR]: NearOnFeetSlashLong,
  [WeaponTypes.STAFF]: NearOnFeetSlashLong,
  [WeaponTypes.HALBERD]: NearOnFeetSlashLong,
  [WeaponTypes.LONG_AXE]: NearOnFeetSlashLong,
}

const slashGrounded = {
  [WeaponTypes.BOW]: NearGroundedSlash,
  [WeaponTypes.SPEAR]: NearGroundedSlash,
  [WeaponTypes.STAFF]: NearGroundedSlash,
  [WeaponTypes.HALBERD]: NearGroundedSlash,
  [WeaponTypes.LONG_AXE]: NearGroundedSlash,
  [WeaponTypes.SHORT_AXE]: NearGroundedSlash,
  [WeaponTypes.CLUB]: NearGroundedSlash,
}

const nearOnFeet = merge(slash, slashOnFeet)
const nearGrounded = merge(slash, slashGrounded)

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
