import { TargetedActionType } from '../../types'

const kick: TargetedActionType = {
  ATTEMPT: {
    USER: [
      'You launch a fierce kick at TARGET, hoping it lands.',
      'Your foot shoots out towards TARGET.',
      'You swing your leg around at TARGET, quick and sure.',
      'Your whole body twists with the flourish of your kick towards TARGET.',
      'You manage enough space to thrust your leg at TARGET.',
      'You awkwardly kick at TARGET.',
    ],
    CHARACTER: [
      'CHARACTER launches a fierce kick at TARGET.',
      "CHARACTER's foot shoots out towards TARGET.",
      'CHARACTER swings their leg around at TARGET, quick and sure.',
      "CHARACTER's whole body twists with the flourish of their kick towards TARGET.",
      'CHARACTER manages enough space to thrust their leg at TARGET.',
      'CHARACTER awkwardly kicks at TARGET.',
    ],
    ENEMY: [
      'CHARACTER launches a fierce kick at you.',
      "CHARACTER's foot shoots out towards you.",
      'CHARACTER swings their leg around at you, quick and sure.',
      "CHARACTER's whole body twists with the flourish of their kick towards you.",
      'CHARACTER manages enough space to thrust their leg at you.',
      'CHARACTER awkwardly kicks at you.',
    ],
  },
  SUCCESS: {
    USER: [
      "Your kick connects with TARGET's SUB_TARGET.",
      'Your foot drives right into the SUB_TARGET of TARGET.',
      "Like it was inevitable, your foot smashes into TARGET's SUB_TARGET.",
      'Even you are surprised when your heel hits TARGET squarely in the SUB_TARGET.',
      "The base of your foot slams TARGET's SUB_TARGET.",
      "With precision, your toes strike right at the SUB_TARGET of TARGET's center.",
    ],
    CHARACTER: [
      "CHARACTER's kick connects with TARGET's SUB_TARGET.",
      "CHARACTER's foot drives right into the SUB_TARGET of TARGET.",
      "Like it was inevitable, CHARACTER's foot smashes into TARGET's SUB_TARGET.",
      "Even CHARACTER is surprised when CHARACTER's heel hits TARGET squarely in the SUB_TARGET.",
      "The base of CHARACTER's foot slams TARGET's SUB_TARGET.",
      "With precision, CHARACTER's toes strike right at the SUB_TARGET of TARGET's center.",
    ],
    ENEMY: [
      "CHARACTER's kick connects with your SUB_TARGET.",
      "CHARACTER's foot drives right into your SUB_TARGET.",
      "Like it was inevitable, CHARACTER's foot smashes into your SUB_TARGET.",
      "Even CHARACTER is surprised when CHARACTER's heel hits you squarely in the SUB_TARGET.",
      "The base of CHARACTER's foot slams your SUB_TARGET.",
      "With precision, CHARACTER's toes strike right at your SUB_TARGET's center.",
    ],
  },
  FAILURE: {
    USER: [
      'Not exactly shocked, you try to regain your footing after your kick misses widely.',
      'Your foot flies through the air and nothing else. You missed.',
      'You feel nothing connect. Your foot missed its target.',
      'The determination in your face slips into defeat as you pull back your leg from your missed strike.',
      'You can almost hear the displaced wind from your foot striking nothing.',
      'Cursing under your breath, you try to steady yourself from kicking nothing.',
    ],
    CHARACTER: [
      'Not exactly shocked, CHARACTER tries to regain their footing after their kick misses widely.',
      "CHARACTER's foot flies through the air and nothing else. They missed.",
      "CHARACTER's foot doesn't connect. They missed their target.",
      "The determination in CHARACTER's face slips into defeat as they pull back their leg from their missed strike.",
      "You can almost hear the displaced wind from CHARACTER's foot striking nothing.",
      'Cursing under their breath, CHARACTER tries to steady themselves from kicking nothing.',
    ],
    ENEMY: [
      'Not exactly shocked, CHARACTER tries to regain their footing after their kick misses widely.',
      "CHARACTER's foot flies through the air and nothing else. They missed.",
      "CHARACTER's foot doesn't connect. They missed their target.",
      "The determination in CHARACTER's face slips into defeat as they pull back their leg from their missed strike.",
      "You can almost hear the displaced wind from CHARACTER's foot striking nothing.",
      'Cursing under their breath, CHARACTER tries to steady themselves from kicking nothing.',
    ],
  },
}

export default kick
