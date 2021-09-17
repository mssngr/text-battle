import merge from 'lodash/merge'
import { Status, Distance, WeaponTypes } from '../../types'
import {
  subTargetDescriptions,
  generateAimedDescriptions,
  genericStabDescriptions,
} from '../utils'

// Descriptions
function generateStabDescriptions(subTargetNames: string[]) {
  const stabDescriptions = [
    ...genericStabDescriptions,
    "From the ground, you wrestle your USER_WEAPON in front of you. You stab it towards TARGET's SUB_TARGET.",
    "You manage to grasp your USER_WEAPON, and you quickly lunge it at TARGET's SUB_TARGET.",
    "Without bothering to get up, you thrust your USER_WEAPON directly at TARGET's SUB_TARGET.",
  ]
  return stabDescriptions.reduce(
    (accum: string[], description) =>
      accum.concat(generateAimedDescriptions(subTargetNames, description)),
    []
  )
}

const NearAnyStab = {
  STAB_LEGS: generateStabDescriptions(subTargetDescriptions.LEGS),
}

const NearOnFeetStabLong = {
  STAB_HEAD: generateStabDescriptions(subTargetDescriptions.HEAD),
  STAB_TORSO: generateStabDescriptions(subTargetDescriptions.TORSO),
  STAB_RIGHT_ARM: generateStabDescriptions(subTargetDescriptions.RIGHT_ARM),
  STAB_LEFT_ARM: generateStabDescriptions(subTargetDescriptions.LEFT_ARM),
}

const NearGroundedStab = {
  STAB_HEAD: generateStabDescriptions(subTargetDescriptions.HEAD),
  STAB_TORSO: generateStabDescriptions(subTargetDescriptions.TORSO),
  STAB_ARM: generateStabDescriptions(subTargetDescriptions.ARM),
}

const stab = {
  [WeaponTypes.BOW]: NearAnyStab,
  [WeaponTypes.SPEAR]: NearAnyStab,
  [WeaponTypes.STAFF]: NearAnyStab,
  [WeaponTypes.HALBERD]: NearAnyStab,
  [WeaponTypes.LONG_AXE]: NearAnyStab,
  [WeaponTypes.SHORT_AXE]: NearAnyStab,
  [WeaponTypes.CLUB]: NearAnyStab,
}

const stabOnFeet = {
  [WeaponTypes.SPEAR]: NearOnFeetStabLong,
  [WeaponTypes.STAFF]: NearOnFeetStabLong,
  [WeaponTypes.HALBERD]: NearOnFeetStabLong,
  [WeaponTypes.LONG_AXE]: NearOnFeetStabLong,
}

const stabGrounded = {
  [WeaponTypes.BOW]: NearGroundedStab,
  [WeaponTypes.SPEAR]: NearGroundedStab,
  [WeaponTypes.STAFF]: NearGroundedStab,
  [WeaponTypes.HALBERD]: NearGroundedStab,
  [WeaponTypes.LONG_AXE]: NearGroundedStab,
  [WeaponTypes.SHORT_AXE]: NearGroundedStab,
  [WeaponTypes.CLUB]: NearGroundedStab,
}

const nearOnFeet = merge(stab, stabOnFeet)
const nearGrounded = merge(stab, stabGrounded)

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
