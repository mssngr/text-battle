import { generateAimedDescriptions, subTargetDescriptions } from '../utils'
import { SubTargetedAction, TargetedAction } from '../../types'

function generateEyeDescriptions(
  subTargetDescriptions: string[]
): TargetedAction {
  return {
    USER: generateAimedDescriptions(subTargetDescriptions, [
      "TARGET clutches their SUB_TARGET. It'll be of no use to them the rest of this fight.",
      "TARGET cries out in pain, grasping at their SUB_TARGET. It's blinded.",
      "TARGET's SUB_TARGET is blinded, for now, a look of shock and confusion on their face.",
      "You strike TARGET's SUB_TARGET, temporarily blinding it.",
      "Amazingly, your attack lands dead center in TARGET's SUB_TARGET. They stagger back, confused and screeching in pain.",
      'TARGET reels from your assault, clasping at their blinded SUB_TARGET.',
    ]),
    CHARACTER: generateAimedDescriptions(subTargetDescriptions, [
      "TARGET clutches their SUB_TARGET. It'll be of no use to them the rest of this fight.",
      "TARGET cries out in pain, grasping at their SUB_TARGET. It's blinded.",
      "TARGET's SUB_TARGET is blinded, for now, a look of shock and confusion on their face.",
      "CHARACTER strikes TARGET's SUB_TARGET, temporarily blinding it.",
      "Amazingly, CHARACTER's attack lands dead center in TARGET's SUB_TARGET. They stagger back, confused and screeching in pain.",
      "TARGET reels from CHARACTER's assault, clasping at their blinded SUB_TARGET.",
    ]),
    ENEMY: generateAimedDescriptions(subTargetDescriptions, [
      "You clutch your SUB_TARGET. It'll be of no use to you the rest of this fight.",
      "You cry out in pain, grasping at your SUB_TARGET. It's blinded.",
      'Your SUB_TARGET is blinded, for now, a look of shock and confusion on your face.',
      'CHARACTER strikes your SUB_TARGET, temporarily blinding it.',
      "Amazingly, CHARACTER's attack lands dead center in your SUB_TARGET. You stagger back, confused and screeching in pain.",
      "You reel from CHARACTER's assault, clasping at your blinded SUB_TARGET.",
    ]),
  }
}

function generateArmDescriptions(
  subTargetDescriptions: string[]
): TargetedAction {
  return {
    USER: generateAimedDescriptions(subTargetDescriptions, [
      'TARGET cradles their SUB_TARGET, it rendered useless.',
      'TARGET yells in pain, holding their injured SUB_TARGET.',
      "TARGET's SUB_TARGET bends an awkward direction from your attack.",
      "If you didn't break it, you sure bruised TARGET's SUB_TARGET badly.",
      'TARGET grimaces, trying to keep composure, but knowing their SUB_TARGET is hurt.',
      "TARGET tries to move their SUB_TARGET around, but it doesn't look quite right.",
    ]),
    CHARACTER: generateAimedDescriptions(subTargetDescriptions, [
      'TARGET cradles their SUB_TARGET, it rendered useless.',
      'TARGET yells in pain, holding their injured SUB_TARGET.',
      "TARGET's SUB_TARGET bends an awkward direction from CHARACTER's attack.",
      "If CHARACTER didn't break it, they sure bruised TARGET's SUB_TARGET badly.",
      'TARGET grimaces, trying to keep composure, but knowing their SUB_TARGET is hurt.',
      "TARGET tries to move their SUB_TARGET around, but it doesn't look quite right.",
    ]),
    ENEMY: generateAimedDescriptions(subTargetDescriptions, [
      'You cradle your SUB_TARGET, it rendered useless.',
      'You yell in pain, holding your injured SUB_TARGET.',
      "Your SUB_TARGET bends an awkward direction from CHARACTER's attack.",
      "If CHARACTER didn't break it, they sure bruised your SUB_TARGET badly.",
      'You grimace, trying to keep composure, but knowing your SUB_TARGET is hurt.',
      "You try to move your SUB_TARGET around, but it doesn't look quite right.",
    ]),
  }
}

function generateLegDescriptions(
  subTargetDescriptions: string[]
): TargetedAction {
  return {
    USER: generateAimedDescriptions(subTargetDescriptions, [
      "TARGET's SUB_TARGET seems to wobble after your blow.",
      "TARGET grimaces, and you can see they're already limping.",
      'TARGET yelps, gripping at their SUB_TARGET.',
      "You wonder if you broke TARGET's SUB_TARGET with the force of that hit.",
      'TARGET struggles to steady themselves, their SUB_TARGET angled awkwardly.',
      "TARGET tries to keep standing on their SUB_TARGET, but it doesn't look quite right.",
    ]),
    CHARACTER: generateAimedDescriptions(subTargetDescriptions, [
      "TARGET's SUB_TARGET seems to wobble after CHARACTER's blow.",
      "TARGET grimaces, and you can see they're already limping.",
      'TARGET yelps, gripping at their SUB_TARGET.',
      "You wonder if CHARACTER broke TARGET's SUB_TARGET with the force of that hit.",
      'TARGET struggles to steady themselves, their SUB_TARGET angled awkwardly.',
      "TARGET tries to keep standing on their SUB_TARGET, but it doesn't look quite right.",
    ]),
    ENEMY: generateAimedDescriptions(subTargetDescriptions, [
      "Your SUB_TARGET seems to wobble after CHARACTER's blow.",
      "You grimace, and CHARACTER can see you're already limping.",
      'You yelp, gripping at your SUB_TARGET.',
      'You wonder if CHARACTER broke your SUB_TARGET with the force of that hit.',
      'You struggles to steady yourself, your SUB_TARGET angled awkwardly.',
      "You try to keep standing on your SUB_TARGET, but it doesn't look quite right.",
    ]),
  }
}

const results: SubTargetedAction = {
  LEFT_EYE: generateEyeDescriptions(subTargetDescriptions.LEFT_EYE),
  RIGHT_EYE: generateEyeDescriptions(subTargetDescriptions.RIGHT_EYE),
  EYES: {
    USER: generateAimedDescriptions(subTargetDescriptions.EYES, [
      "TARGET clutches their SUB_TARGET. They'll be of no use to them the rest of this fight.",
      "TARGET cries out in pain, grasping at their SUB_TARGET. They're blinded.",
      "TARGET's SUB_TARGET are blinded, for now, a look of shock and confusion on their face.",
      "You strike TARGET's SUB_TARGET, temporarily blinding them.",
      "Amazingly, your attack lands dead center across TARGET's SUB_TARGET. They stagger back, confused and screeching in pain.",
      'TARGET reels from your assault, clasping at their blinded SUB_TARGET.',
    ]),
    CHARACTER: generateAimedDescriptions(subTargetDescriptions.EYES, [
      "TARGET clutches their SUB_TARGET. They'll be of no use to them the rest of this fight.",
      "TARGET cries out in pain, grasping at their SUB_TARGET. They're blinded.",
      "TARGET's SUB_TARGET are blinded, for now, a look of shock and confusion on their face.",
      "CHARACTER strikes TARGET's SUB_TARGET, temporarily blinding them.",
      "Amazingly, CHARACTER's attack lands dead center across TARGET's SUB_TARGET. They stagger back, confused and screeching in pain.",
      "TARGET reels from CHARACTER's assault, clasping at their blinded SUB_TARGET.",
    ]),
    ENEMY: generateAimedDescriptions(subTargetDescriptions.EYES, [
      "You clutch your SUB_TARGET. They'll be of no use to you the rest of this fight.",
      "You cry out in pain, grasping at your SUB_TARGET. They're blinded.",
      'Your SUB_TARGET are blinded, for now, a look of shock and confusion on your face.',
      'CHARACTER strikes your SUB_TARGET, temporarily blinding them.',
      "Amazingly, CHARACTER's attack lands dead center across your SUB_TARGET. You stagger back, confused and screeching in pain.",
      "You reel from CHARACTER's assault, clasping at your blinded SUB_TARGET.",
    ]),
  },
  HEAD: {
    USER: generateAimedDescriptions(subTargetDescriptions.HEAD, [
      'TARGET feels woozy. They teeter back and forth, unstable.',
      'TARGET falters backwards, grasping their injured SUB_TARGET.',
      'Your attack lands, causing TARGET to spin clumsily.',
      'TARGET looks dumbstruck, for a moment, their eyes unfocused, not yet realizing what hit them.',
      'Successful, you watch as TARGET blunders drunkenly about.',
      'TARGET immediately cradles their SUB_TARGET and groans something inutterable, stumbling to find their footing.',
    ]),
    CHARACTER: generateAimedDescriptions(subTargetDescriptions.HEAD, [
      'TARGET feels woozy. They teeter back and forth, unstable.',
      'TARGET falters backwards, grasping their injured SUB_TARGET.',
      "CHARACTER's attack lands, causing TARGET to spin clumsily.",
      'TARGET looks dumbstruck, for a moment, their eyes unfocused, not yet realizing what hit them.',
      'Successful, CHARACTER watches as TARGET blunders drunkenly about.',
      'TARGET immediately cradles their SUB_TARGET and groans something inutterable, stumbling to find their footing.',
    ]),
    ENEMY: generateAimedDescriptions(subTargetDescriptions.HEAD, [
      'You feel woozy. You teeter back and forth, unstable.',
      'You falter backwards, grasping your injured SUB_TARGET.',
      "CHARACTER's attack lands, causing you to spin clumsily.",
      'You look dumbstruck, for a moment, your eyes unfocused, not yet realizing what hit you.',
      'Successful, CHARACTER watches as you blunder drunkenly about.',
      'You immediately cradle your SUB_TARGET and groan something inutterable, stumbling to find your footing.',
    ]),
  },
  NECK: { USER: ['tbd'], CHARACTER: ['tbd'], ENEMY: ['tbd'] },
  TORSO: {
    USER: generateAimedDescriptions(subTargetDescriptions.TORSO, [
      'TARGET howls something distasteful, grasping their SUB_TARGET.',
      "TARGET's wind is knocked clean out of them. They struggle to catch their breath.",
      'TARGET moves, too late, to protect their SUB_TARGET, wincing at the pain.',
      'TARGET wails fiercely, clutching their SUB_TARGET.',
      "You can see in TARGET's eyes that they felt that blow, deeply.",
      'TARGET doubles over, looking like they might barf.',
    ]),
    CHARACTER: generateAimedDescriptions(subTargetDescriptions.TORSO, [
      'TARGET howls something distasteful, grasping their SUB_TARGET.',
      "TARGET's wind is knocked clean out of them. They struggle to catch their breath.",
      'TARGET moves, too late, to protect their SUB_TARGET, wincing at the pain.',
      'TARGET wails fiercely, clutching their SUB_TARGET.',
      "CHARACTER can see in TARGET's eyes that they felt that blow, deeply.",
      'TARGET doubles over, looking like they might barf.',
    ]),
    ENEMY: generateAimedDescriptions(subTargetDescriptions.TORSO, [
      'You howl something distasteful, grasping your SUB_TARGET.',
      'Your wind is knocked clean out of you. You struggle to catch your breath.',
      'You move, too late, to protect your SUB_TARGET, wincing at the pain.',
      'You wail fiercely, clutching your SUB_TARGET.',
      'CHARACTER can see in your eyes that you felt that blow, deeply.',
      'You double over, looking like you might barf.',
    ]),
  },
  LEFT_ARM: generateArmDescriptions(subTargetDescriptions.LEFT_ARM),
  RIGHT_ARM: generateArmDescriptions(subTargetDescriptions.RIGHT_ARM),
  PELVIS: { USER: ['tbd'], CHARACTER: ['tbd'], ENEMY: ['tbd'] },
  BUTT: { USER: ['tbd'], CHARACTER: ['tbd'], ENEMY: ['tbd'] },
  LEFT_LEG: generateLegDescriptions(subTargetDescriptions.LEFT_LEG),
  RIGHT_LEG: generateLegDescriptions(subTargetDescriptions.RIGHT_LEG),
  LEGS: {
    USER: generateAimedDescriptions(subTargetDescriptions.LEGS, [
      "TARGET's SUB_TARGET seem to wobble after your blow.",
      "TARGET grimaces, and you can see they're already limping.",
      'TARGET yelps, gripping at their SUB_TARGET.',
      "You wonder if you broke TARGET's SUB_TARGET with the force of that hit.",
      'TARGET struggles to steady themselves, their SUB_TARGET angled awkwardly.',
      "TARGET tries to keep standing on their SUB_TARGET, but it doesn't look quite right.",
    ]),
    CHARACTER: generateAimedDescriptions(subTargetDescriptions.LEGS, [
      "TARGET's SUB_TARGET seems to wobble after CHARACTER's blow.",
      "TARGET grimaces, and you can see they're already limping.",
      'TARGET yelps, gripping at their SUB_TARGET.',
      "You wonder if CHARACTER broke TARGET's SUB_TARGET with the force of that hit.",
      'TARGET struggles to steady themselves, their SUB_TARGET angled awkwardly.',
      "TARGET tries to keep standing on their SUB_TARGET, but it doesn't look quite right.",
    ]),
    ENEMY: generateAimedDescriptions(subTargetDescriptions.LEGS, [
      "Your SUB_TARGET seems to wobble after CHARACTER's blow.",
      "You grimace, and CHARACTER can see you're already limping.",
      'You yelp, gripping at your SUB_TARGET.',
      'You wonder if CHARACTER broke your SUB_TARGET with the force of that hit.',
      'You struggles to steady yourself, your SUB_TARGET angled awkwardly.',
      "You try to keep standing on your SUB_TARGET, but it doesn't look quite right.",
    ]),
  },
  // CRIPPLE: {
  //   USER: [
  //     'TARGET tumbles to the ground, ungracefully.',
  //     "It doesn't look pretty when TARGET falls.",
  //     'TARGET lands ',
  //   ],
  // },
}

export default results
