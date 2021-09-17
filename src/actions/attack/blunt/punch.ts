import { TargetedActionType } from '../../types'

const punch: TargetedActionType = {
  ATTEMPT: {
    USER: [
      'You raise your fist. You take a desparate swing at TARGET.',
      'With your bare hands, you strike at TARGET.',
      'Your fist comes down towards TARGET with surprising speed.',
      "Slower than you'd like, you throw a clumsy punch at TARGET.",
      'You hurl your balled fist right at TARGET.',
      'You slam your fist at TARGET, wishing for it to connect.',
    ],
    CHARACTER: [
      'CHARACTER raises their fist. They take a desparate swing at TARGET.',
      'With their bare hands, CHARACTER strikes at TARGET.',
      "CHARACTER's fist comes down towards TARGET with surprising speed.",
      'Slowly, CHARACTER throws a clumsy punch at TARGET.',
      "CHARACTER hurls their balled fist right at TARGET's SUB_TARGET.",
      'CHARACTER slams their fist at TARGET.',
    ],
    ENEMY: [
      'CHARACTER raises their fist. They take a desparate swing at you.',
      'With their bare hands, CHARACTER strikes at you.',
      "CHARACTER's fist comes down towards you with surprising speed.",
      'Slowly, CHARACTER throws a clumsy punch at you.',
      'CHARACTER hurls their balled fist right at your SUB_TARGET.',
      'CHARACTER slams their fist at you.',
    ],
  },
  SUCCESS: {
    USER: [
      "Your fist connects with TARGET's SUB_TARGET.",
      'Your fist smashes into the SUB_TARGET of TARGET.',
      'By all accounts, TARGET should have dodged it, but your punch lands, anyways, right on their SUB_TARGET.',
      "You hit TARGET's SUB_TARGET, dead on.",
      "Despite your slow swing, the blow hits TARGET's SUB_TARGET.",
      'The strike hits TARGET, squarely in the SUB_TARGET.',
    ],
    CHARACTER: [
      "CHARACTER's fist connects with TARGET's SUB_TARGET.",
      "CHARACTER's fist smashes into the SUB_TARGET of TARGET.",
      "By all accounts, TARGET should have dodged it, but CHARACTER's punch lands, anyways, right on their SUB_TARGET.",
      "CHARACTER hits TARGET's SUB_TARGET, dead on.",
      "Despite CHARACTER's slow swing, the blow hits TARGET's SUB_TARGET.",
      'The strike hits TARGET, squarely in the SUB_TARGET.',
    ],
    ENEMY: [
      "CHARACTER's fist connects with your SUB_TARGET.",
      "CHARACTER's fist smashes into your SUB_TARGET.",
      "By all accounts, you should have dodged it, but CHARACTER's punch lands, anyways, right on their SUB_TARGET.",
      'CHARACTER hits your SUB_TARGET, dead on.',
      "Despite CHARACTER's slow swing, the blow hits your SUB_TARGET.",
      'The strike hits you, squarely in the SUB_TARGET.',
    ],
  },
  FAILURE: {
    USER: [
      'Your swing meets the air.',
      "Your punch doesn't connect.",
      'TARGET dodges your punch.',
      "You notice TARGET's slight sneer as your arm hits nothing.",
      "Your fist just grazes TARGET's SUB_TARGET, doing nothing of consequence.",
      'You curse yourself as your punch goes wide.',
    ],
    CHARACTER: [
      "CHARACTER's swing meets the air.",
      "CHARACTER's punch doesn't connect.",
      "TARGET dodges CHARACTER's punch.",
      "CHARACTER notices TARGET's slight sneer as their arm hits nothing.",
      "CHARACTER's fist just grazes TARGET's SUB_TARGET, doing nothing of consequence.",
      'CHARACTER curses themselves as their punch goes wide.',
    ],
    ENEMY: [
      "CHARACTER's swing meets the air.",
      "CHARACTER's punch doesn't connect.",
      "You dodge CHARACTER's punch.",
      'CHARACTER notices your slight sneer as your arm hits nothing.',
      "CHARACTER's fist just grazes your SUB_TARGET, doing nothing of consequence.",
      'CHARACTER curses themselves as their punch goes wide.',
    ],
  },
}

export default punch
