export enum Status {
  READY,
  OPENED,
  ON_GROUND,
}

export enum GrapplingStatus {
  HOLDING,
  HELD,
  STRANGLING,
  STRANGLED,
}

export enum Distance {
  FAR,
  NEAR,
}

export enum WeaponType {
  HANDS,
  FEET,
  BOW,
  CROSSBOW,
  SLING,
  SPEAR,
  LONG_AXE,
  HALBERD,
  STAFF,
  LONG_SWORD,
  SHORT_SWORD,
  CURVED_SWORD,
  KNIFE,
  SHORT_AXE,
  CLUB,
}

export enum ActionType {
  ATTEMPT = 'ATTEMPT',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export enum Target {
  USER = 'USER',
  CHARACTER = 'CHARACTER',
  ENEMY = 'ENEMY',
}

export enum SubTarget {
  HEAD = 'HEAD',
  LEFT_EYE = 'LEFT_EYE',
  RIGHT_EYE = 'RIGHT_EYE',
  EYES = 'EYES',
  NECK = 'NECK',
  LEFT_ARM = 'LEFT_ARM',
  RIGHT_ARM = 'RIGHT_ARM',
  TORSO = 'TORSO',
  PELVIS = 'PELVIS',
  BUTT = 'BUTT',
  LEFT_LEG = 'LEFT_LEG',
  RIGHT_LEG = 'RIGHT_LEG',
  LEGS = 'LEGS',
}

export type TargetedAction = Record<Target, string[]>
export type SubTargetedAction = Record<SubTarget, TargetedAction>
export type TargetedActionType = Record<ActionType, TargetedAction>
