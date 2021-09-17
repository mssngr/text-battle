import merge from 'lodash/merge'
import { Status, Distance, WeaponTypes } from '../../types'
import {
  subTargetDescriptions,
  generateAimedDescriptions,
  genericThrownDescriptions,
} from '../utils'

// Descriptions
function generateThrownDescriptions(subTargetNames: string[]) {
  const thrownDescriptions = [
    ...genericThrownDescriptions,
    "From the ground, you wrestle your USER_WEAPON in front of you. You let it fly towards TARGET's SUB_TARGET.",
    "You manage to throw your USER_WEAPON, quickly sending it to TARGET's SUB_TARGET.",
    "Without bothering to get up, you hurl your USER_WEAPON directly at TARGET's SUB_TARGET.",
  ]
  return thrownDescriptions.reduce(
    (accum: string[], description) =>
      accum.concat(generateAimedDescriptions(subTargetNames, description)),
    []
  )
}

const AnyAnyThrown = {
  THROW_HEAD: generateThrownDescriptions(subTargetDescriptions.HEAD),
  THROW_TORSO: generateThrownDescriptions(subTargetDescriptions.TORSO),
  THROW_LEG: generateThrownDescriptions(subTargetDescriptions.LEG),
}

const AnyOnFeetThrown = {
  THROW_RIGHT_ARM: generateThrownDescriptions(subTargetDescriptions.RIGHT_ARM),
  THROW_LEFT_ARM: generateThrownDescriptions(subTargetDescriptions.LEFT_ARM),
}

const AnyGroundedThrown = {
  THROW_ARM: generateThrownDescriptions(subTargetDescriptions.ARM),
}

const thrown = {
  [WeaponTypes.BOW]: AnyAnyThrown,
  [WeaponTypes.SPEAR]: AnyAnyThrown,
  [WeaponTypes.STAFF]: AnyAnyThrown,
  [WeaponTypes.HALBERD]: AnyAnyThrown,
  [WeaponTypes.LONG_SWORD]: AnyAnyThrown,
  [WeaponTypes.SHORT_SWORD]: AnyAnyThrown,
  [WeaponTypes.CURVED_SWORD]: AnyAnyThrown,
  [WeaponTypes.SHORT_AXE]: AnyAnyThrown,
  [WeaponTypes.CLUB]: AnyAnyThrown,
}

const thrownOnFeet = {
  [WeaponTypes.BOW]: AnyOnFeetThrown,
  [WeaponTypes.SPEAR]: AnyOnFeetThrown,
  [WeaponTypes.STAFF]: AnyOnFeetThrown,
  [WeaponTypes.HALBERD]: AnyOnFeetThrown,
  [WeaponTypes.LONG_SWORD]: AnyOnFeetThrown,
  [WeaponTypes.SHORT_SWORD]: AnyOnFeetThrown,
  [WeaponTypes.CURVED_SWORD]: AnyOnFeetThrown,
  [WeaponTypes.SHORT_AXE]: AnyOnFeetThrown,
  [WeaponTypes.CLUB]: AnyOnFeetThrown,
}

const thrownGrounded = {
  [WeaponTypes.BOW]: AnyGroundedThrown,
  [WeaponTypes.SPEAR]: AnyGroundedThrown,
  [WeaponTypes.STAFF]: AnyGroundedThrown,
  [WeaponTypes.HALBERD]: AnyGroundedThrown,
  [WeaponTypes.LONG_SWORD]: AnyGroundedThrown,
  [WeaponTypes.SHORT_SWORD]: AnyGroundedThrown,
  [WeaponTypes.CURVED_SWORD]: AnyGroundedThrown,
  [WeaponTypes.SHORT_AXE]: AnyGroundedThrown,
  [WeaponTypes.CLUB]: AnyGroundedThrown,
}

const nearOnFeet = merge(thrown, thrownOnFeet)
const nearGrounded = merge(thrown, thrownGrounded)

// Export
export default {
  [Distance.FAR]: {
    [Status.READY]: thrown,
    [Status.GRAPPLING]: thrown,
    [Status.OFF_BALANCE]: thrown,
    [Status.ON_GROUND]: thrown,
    [Status.ON_TOP]: thrown,
    [Status.ON_BOTTOM]: thrown,
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
