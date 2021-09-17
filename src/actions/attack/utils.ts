import { SubTarget } from '../types'

function withPrefix(prefix: string, subTargetDescriptions: string[]) {
  return subTargetDescriptions.concat(
    subTargetDescriptions.map(subTarget => `${prefix} ${subTarget}`)
  )
}

const armDescriptions = ['arm', 'forearm', 'wrist', 'shoulder', 'hand', 'elbow']
const legDescriptions = [
  'leg',
  'foot',
  'ankle',
  'calf',
  'shin',
  'knee',
  'thigh',
]

export const subTargetDescriptions = {
  [SubTarget.HEAD]: [
    'head',
    'skull',
    'neck',
    'jaw',
    'cheek',
    'nose',
    'forehead',
  ],
  [SubTarget.LEFT_EYE]: withPrefix('left', ['eye']),
  [SubTarget.RIGHT_EYE]: withPrefix('right', ['eye']),
  [SubTarget.EYES]: ['eyes'],
  [SubTarget.NECK]: [
    'neck',
    'throat',
    'nape',
    'gullet',
    'windpipe',
    'trachea',
    'jugular',
  ],
  [SubTarget.LEFT_ARM]: withPrefix('left', armDescriptions),
  [SubTarget.RIGHT_ARM]: withPrefix('right', armDescriptions),
  [SubTarget.TORSO]: [
    'torso',
    'abdomen',
    'stomach',
    'gut',
    'chest',
    'breast',
    'belly',
    'rib cage',
    'ribs',
    'upper body',
    'waist',
    'core',
    'trunk',
    'side',
  ],
  [SubTarget.PELVIS]: ['pelvis', 'crotch', 'groin', 'loins', 'privates'],
  [SubTarget.BUTT]: [
    'butt',
    'buttocks',
    'behind',
    'haunches',
    'rear',
    'hindquarters',
    'rump',
    'backside',
    'rear end',
    'posterior',
  ],
  [SubTarget.LEFT_LEG]: withPrefix('left', legDescriptions),
  [SubTarget.RIGHT_LEG]: withPrefix('right', legDescriptions),
  [SubTarget.LEGS]: [
    'legs',
    'feet',
    'ankles',
    'calves',
    'shins',
    'knees',
    'thighs',
  ],
}

export function generateAimedDescriptions(
  subTargetDescriptions: string[],
  descriptions: string[]
) {
  return subTargetDescriptions.reduce(
    (accum: string[], subTargetDescription) =>
      accum.concat(
        descriptions.map(description =>
          description.replace(/SUB_TARGET/g, subTargetDescription)
        )
      ),
    []
  )
}
