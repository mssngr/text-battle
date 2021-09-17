import merge from 'lodash/merge'
import { Status, Distance, WeaponTypes } from '../../types'
import {
  subTargetDescriptions,
  generateAimedDescriptions,
  punch,
} from '../utils'

// Descriptions
function generatePunchAttempts(subTargetNames: string[]) {
  return {
    USER: generateAimedDescriptions(
      subTargetNames,
      punch.attempts.USER.concat([
        "From the ground, you wriggle your hands in front of you. You swing a punch towards TARGET's SUB_TARGET.",
        "You manage to free your hands, and you quickly slug at TARGET's SUB_TARGET.",
        "Without bothering to get up, you hurl your fist directly at TARGET's SUB_TARGET.",
      ])
    ),
    CHARACTER: generateAimedDescriptions(
      subTargetNames,
      punch.attempts.CHARACTER.concat([
        "From the ground, CHARACTER wriggles their hands in front of them. They swing a punch towards TARGET's SUB_TARGET.",
        "CHARACTER manage to free their hands, and they quickly slug at TARGET's SUB_TARGET.",
        "Without bothering to get up, CHARACTER hurls their fist directly at TARGET's SUB_TARGET.",
      ])
    ),
    ENEMY: generateAimedDescriptions(
      subTargetNames,
      punch.attempts.ENEMY.concat([
        'From the ground, CHARACTER wriggles their hands in front of them. They swing a punch towards your SUB_TARGET.',
        'CHARACTER manage to free their hands, and they quickly slug at your SUB_TARGET.',
        'Without bothering to get up, CHARACTER hurls their fist directly at your SUB_TARGET.',
      ])
    ),
  }
}

const NearAnyPunch = {
  PUNCH_LEFT_LEG: generatePunchAttempts(subTargetDescriptions.LEFT_LEG),
  PUNCH_RIGHT_LEG: generatePunchAttempts(subTargetDescriptions.RIGHT_LEG),
}

const NearGroundedPunch = {
  PUNCH_HEAD: generatePunchAttempts(subTargetDescriptions.HEAD),
  PUNCH_TORSO: generatePunchAttempts(subTargetDescriptions.TORSO),
  PUNCH_LEFT_ARM: generatePunchAttempts(subTargetDescriptions.LEFT_ARM),
  PUNCH_RIGHT_ARM: generatePunchAttempts(subTargetDescriptions.RIGHT_ARM),
}

const nearAny = {
  [WeaponTypes.HANDS]: NearAnyPunch,
}

const nearGrounded = merge(nearAny, {
  [WeaponTypes.HANDS]: NearGroundedPunch,
})

// Export
export default {
  [Distance.NEAR]: {
    [Status.READY]: nearAny,
    [Status.GRAPPLING]: nearAny,
    [Status.OFF_BALANCE]: nearAny,
    [Status.ON_GROUND]: nearGrounded,
    [Status.ON_TOP]: nearGrounded,
    [Status.ON_BOTTOM]: nearGrounded,
  },
}
