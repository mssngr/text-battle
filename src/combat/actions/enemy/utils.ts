const subTargetStabDeaths = {
  HEAD: {
    USER: [
      "TARGET's blood spills out of their SUB_TARGET, gushing down from their head. They collapse, dead on the spot.",
    ],
  },
}

const disarm = {
  USER: [
    'TARGET drops their TARGET_WEAPON to the ground.',
    "TARGET's TARGET_WEAPON spills from their hand.",
    "TARGET's TARGET_WEAPON flies through the air.",
    "TARGET's TARGET_WEAPON clatters onto the ground.",
    'TARGET lets their TARGET_WEAPON slip through their fingers.',
    "TARGET's hand opens and their TARGET_WEAPON slides downward.",
  ],
  CHARACTER: [
    'TARGET drops their TARGET_WEAPON to the ground.',
    "TARGET's TARGET_WEAPON spills from their hand.",
    "TARGET's TARGET_WEAPON flies through the air.",
    "TARGET's TARGET_WEAPON clatters onto the ground.",
    'TARGET lets their TARGET_WEAPON slip through their fingers.',
    "TARGET's hand opens and their TARGET_WEAPON slides downward.",
  ],
  ENEMY: [
    'You drop your USER_WEAPON to the ground.',
    'Your USER_WEAPON spills from your hand.',
    'Your USER_WEAPON flies through the air.',
    'Your USER_WEAPON clatters onto the ground.',
    'You let your USER_WEAPON slip through your fingers.',
    'Your hand opens and your USER_WEAPON slides downward.',
  ],
}

const counterTrips = {
  USER: [
    'Your determination turns to horror, as you realize TARGET tripped you. You descend face first into the ground.',
    "Before you realize what's happening, you're on your back staring upwards, tripped by TARGET.",
    'TARGET sticks their leg out and gives you a little shove on your back, causing you to spill to the ground.',
    'TARGET fakes you out and contorts their body so that you trip over it. You flop unceremoniously to the ground.',
    'Your feet are swept out from under you, and you slam the ground, arms outstretched.',
    'You feel something tug at your feet, and you find yourself rolling on the ground.',
  ],
  CHARACTER: [
    "CHARACTER's determination turns to horror, as they realize TARGET tripped them. They descend face first into the ground.",
    "Before CHARACTER realizes what's happening, they're on their back staring upwards, tripped by TARGET.",
    'TARGET sticks their leg out and gives CHARACTER a little shove on their back, causing them to spill to the ground.',
    'TARGET fakes CHARACTER out and contorts their body so that CHARACTER trips over it. CHARACTER flops unceremoniously to the ground.',
    "CHARACTER's feet are swept out from under them, and they slam the ground, arms outstretched.",
    'CHARACTER feels something tug at their feet, and they find themselves rolling on the ground.',
  ],
  ENEMY: [
    "CHARACTER's determination turns to horror, as they realize you tripped them. They descend face first into the ground.",
    "Before CHARACTER realizes what's happening, they're on their back staring upwards, tripped by you.",
    'You stick your leg out and give CHARACTER a little shove on their back, causing them to spill to the ground.',
    'You fake CHARACTER out and contort your body so that CHARACTER trips over it. CHARACTER flops unceremoniously to the ground.',
    "CHARACTER's feet are swept out from under them, and they slam the ground, arms outstretched.",
    'CHARACTER feels something tug at their feet, and they find themselves rolling on the ground.',
  ],
}

const counterAttacks = {
  USER: [
    'TARGET outmaneuvers your attack and strikes you.',
    "To your surprise, you see TARGET's TARGET_WEAPON come towards you, instead. You try to dodge it, but you are too slow.",
    'With lightning reflexes, TARGET brings their TARGET_WEAPON down upon you.',
    'You stop your attack as you feel sudden pain.',
    "You see it coming a mile away, but you still can't dodge TARGET's counter strike.",
    'TARGET is too fast for you, countering with their TARGET_WEAPON.',
  ],
  CHARACTER: [
    "TARGET outmaneuvers CHARACTER's attack and strikes them.",
    "To CHARACTER's surprise, they see TARGET's TARGET_WEAPON come towards them, instead. They try to dodge it, but they are too slow.",
    'With lightning reflexes, TARGET brings their TARGET_WEAPON down upon CHARACTER.',
    'CHARACTER stops their attack as they feel sudden pain.',
    "CHARACTER sees it coming a mile away, but they still can't dodge TARGET's counter strike.",
    'TARGET is too fast for CHARACTER, countering with their TARGET_WEAPON.',
  ],
  ENEMY: [
    "You outmaneuver CHARACTER's attack and strike them.",
    "To CHARACTER's surprise, they see your USER_WEAPON come towards them, instead. They try to dodge it, but they are too slow.",
    'With lightning reflexes, you bring your USER_WEAPON down upon CHARACTER.',
    'CHARACTER stops their attack as they feel sudden pain.',
    "CHARACTER sees it coming a mile away, but they still can't dodge your counter strike.",
    'You are too fast for CHARACTER, countering with your USER_WEAPON.',
  ],
}

export const genericBowDescriptions = [
  "You aim for TARGET's SUB_TARGET and fire.",
  "You nock an arrow, aim for TARGET's SUB_TARGET, and release, entreating it to land.",
  "You loose an arrow towards TARGET's SUB_TARGET, praying it finds its quarry.",
  "Aiming for TARGET's SUB_TARGET, you loose a quick arrow, watching it fly.",
  "Without hesitation, your bow is in front of you. TARGET's SUB_TARGET is in your sights. You let your arrow fly.",
  'Your gaze locks onto SUB_TARGET of TARGET. Your bow soon follows. You let the arrow fly.',
]

export const genericSlingDescriptions = [
  'You aim for the SUB_TARGET of TARGET and let a stone loose.',
  "You feed a rock to your sling, aim for TARGET's SUB_TARGET, and release, praying it lands.",
  "You sling a stone towards TARGET's SUB_TARGET, hoping it finds its quarry.",
  "Aiming for TARGET's SUB_TARGET, you sling a stone, watching it soar.",
  "Without hesitation, your sling is swirling. TARGET's SUB_TARGET is in your sights. You release.",
  "Your gze locks onto TARGET's SUB_TARGET. Your sling is already in motion. The rock flies through the air.",
]

export const genericThrownDescriptions = [
  "You aim for TARGET's SUB_TARGET and let your USER_WEAPON fly.",
  "You ready your USER_WEAPON, aim for TARGET's SUB_TARGET, and throw, begging it to land.",
  'You hurl your USER_WEAPON towards the SUB_TARGET of TARGET, commanding it to find its quarry.',
  "Aiming for TARGET's SUB_TARGET, you hurl your USER_WEAPON, gazing as it soars.",
  "Without hesitation, your USER_WEAPON is pulled back. TARGET's SUB_TARGET is in your sights. You let your USER_WEAPON fly.",
  "Your gaze locks onto TARGET's SUB_TARGET. Your USER_WEAPON is already in motion. You watch as it hovers through the air.",
]

export const genericStabDescriptions = [
  "You thrust your USER_WEAPON at TARGET's SUB_TARGET.",
  "You desperately stab at TARGET's SUB_TARGET.",
  "Your grip tightens on your USER_WEAPON. You see an opening near TARGET's SUB_TARGET. Your USER_WEAPON lurches forward.",
  'You lunge at TARGET, pointing your USER_WEAPON right at their SUB_TARGET.',
  'Quick as lightning, you stab your USER_WEAPON at the SUB_TARGET of TARGET.',
  "You raise your USER_WEAPON. You stab it towards TARGET's SUB_TARGET.",
]

export const genericSlashDescriptions = [
  "You reach your USER_WEAPON back, then slash it at TARGET's SUB_TARGET with vicious determination.",
  'You heft your USER_WEAPON in your hand. Steel slices through the air as you bring it down on the SUB_TARGET of TARGET.',
  "You cut through the air with your USER_WEAPON towards TARGET's SUB_TARGET.",
  "You hastily swing your USER_WEAPON, hoping it strikes TARGET's SUB_TARGET.",
  "You pray for the sharpness of your steel as you swing it towards TARGET's SUB_TARGET.",
  "With a flash, your blade sings outward, towards TARGET's SUB_TARGET.",
]

export const genericBashDescriptions = [
  'Hefting your USER_WEAPON up, you swing it at TARGET\'s SUB_TARGET, listening for the "crack" of connection.',
  "Your USER_WEAPON is over your head. You bring it down towards TARGET's SUB_TARGET.",
  "Your confidence surges as you slug your USER_WEAPON at TARGET's SUB_TARGET.",
  'Faster than even you expect, you strike with your USER_WEAPON at the SUB_TARGET of TARGET.',
  "Your USER_WEAPON feels heavy, but you swing it at TARGET's SUB_TARGET, all the same.",
  'Prefering to bludgeon the SUB_TARGET of TARGET, you swing wide with your USER_WEAPON.',
]

export const genericTripDescriptions = [
  "You sweep at TARGET's legs with your foot, aspiring to bring them down.",
  "You desperately swipe at TARGET's feet, willing them to fall.",
  'Aiming to gain an advantage, you try to trip TARGET.',
  "Skillfully, hooking your foot behind TARGET's, you utilize their body weight against them.",
  'You try a few tricks of the trade to cause TARGET to stumble.',
  "Using a move you think of on the spot, you attempt to trip TARGET, acting faster than your brain can process what's happening.",
]

export const genericTakeWeaponDescriptions = [
  "You hurl yourself on TARGET's TARGET_WEAPON, trying to wrest it from them.",
  "You grasp TARGET's TARGET_WEAPON, desperately trying to wrench it free.",
  "Bravely, you lunge at TARGET's TARGET_WEAPON. The two of you fight for control of it.",
  'Before TARGET can realize it, you slam the arm holding their TARGET_WEAPON, vying to gain the upper hand.',
  "TARGET's TARGET_WEAPON is in their hands. But you think you can take it from them. You take your chances and lurch forwards.",
  "Not giving TARGET a second to react, you're wrapped around their arm, trying to tear their TARGET_WEAPON free.",
]

export const genericGrappleDescriptions = [
  'Surprising TARGET, you surge forwards, attempting to sieze them.',
  'You launch yourself at TARGET, endeavoring to grab hold of them.',
  'You grasp at TARGET, trying lock them in a deadly embrace.',
  'You lurch forwards, reaching to take hold of TARGET.',
  'Seeking to gain the upper hand, you try to grab at TARGET.',
  'Eager to turn the tide, you move to wrap TARGET in a lethal hold.',
]

export const tackle = {
  attempts: {
    USER: [
      'TARGET catches a violent glimmer in your eyes. You charge, like a maniac, headlong at them.',
      'Out of ideas, you barrel, pell-mell, straight at TARGET.',
      'You lower yourself, as if for a race, and lunge at TARGET, intending to bring them down.',
      'You let out a cry and sprint towards TARGET, arms outward, head bowed down like a bull.',
      'You set your shoulders and careen straight towards TARGET, seeing their eyes widen in surprise.',
      'You take a deep breath, then dash right at TARGET, choosing to topple them over.',
    ],
    CHARACTER: [
      "TARGET catches a violent glimmer in CHARACTER's eyes. CHARACTER charges, like a maniac, headlong at them.",
      'Out of ideas, CHARACTER barrels, pell-mell, straight at TARGET.',
      'CHARACTER lowers themselves, as if for a race, and lunges at TARGET, intending to bring them down.',
      'CHARACTER lets out a cry and sprints towards TARGET, arms outward, head bowed down like a bull.',
      "CHARACTER sets their shoulders and careens straight towards TARGET. TARGET's eyes widen in surprise.",
      'CHARACTER takes a deep breath, then dashes right at TARGET, choosing to topple them over.',
    ],
    ENEMY: [
      "You catch a violent glimmer in CHARACTER's eyes. CHARACTER charges, like a maniac, headlong at you.",
      'Out of ideas, CHARACTER barrels, pell-mell, straight at you.',
      'CHARACTER lowers themselves, as if for a race, and lunges at you, intending to bring you down.',
      'CHARACTER lets out a cry and sprints towards you, arms outward, head bowed down like a bull.',
      'CHARACTER sets their shoulders and careens straight towards you. Your eyes widen in surprise.',
      'CHARACTER takes a deep breath, then dashes right at you, choosing to topple you over.',
    ],
  },
  successes: {
    USER: [
      'You barrel straight into TARGET, bringing them tumbling down.',
      'Your charge connects, toppling TARGET over with you on top of them.',
      'Careening to the ground, you find yourself on top of TARGET, the breath knocked out of them.',
      'You tackle TARGET, lifting them up slightly before bringing them crashing down to the ground.',
      'You plunge into TARGET, wrapping your arms around them, wrestling them to the ground.',
      "You can hear the wind escape TARGET's lungs as both your bodies awkwardly spill haphazardly to the ground with you on top.",
    ],
    CHARACTER: [
      'CHARACTER barrels straight into TARGET, bringing them tumbling down.',
      "CHARACTER's charge connects, toppling TARGET over with CHARACTER on top of them.",
      'Careening to the ground, CHARACTER finds themselves on top of TARGET, the breath knocked out of TARGET.',
      'CHARACTER tackles TARGET, lifting them up slightly before bringing them crashing down to the ground.',
      'CHARACTER plunges into TARGET, wrapping their arms around TARGET, wrestling TARGET to the ground.',
      "CHARACTER can hear the wind escape TARGET's lungs as both their bodies awkwardly spill haphazardly to the ground with CHARACTER on top.",
    ],
    ENEMY: [
      'CHARACTER barrels straight into you, bringing you tumbling down.',
      "CHARACTER's charge connects, toppling you over with CHARACTER on top of you.",
      'Careening to the ground, CHARACTER finds themselves on top of you, the breath knocked out of you.',
      'CHARACTER tackles you, lifting you up slightly before bringing you crashing down to the ground.',
      'CHARACTER plunges into you, wrapping their arms around you, wrestling you to the ground.',
      'CHARACTER can hear the wind escape your lungs as both your bodies awkwardly spill haphazardly to the ground with CHARACTER on top.',
    ],
  },
  failures: {
    USER: [
      'You barrel straight past TARGET, throwing you off balance.',
      'TARGET sidesteps you, putting you off balance.',
      'TARGET manages to dodge your tackle, sending you reeling, unbalanced.',
      'You miss TARGET, altogether, and find yourself tipping over.',
      "TARGET's fright turns to laughter as you miscalculate your trajectory, careening off balance.",
      'You forget to lock your arms around TARGET, bouncing right off, struggling to find your footing.',
    ],
    CHARACTER: [
      'CHARACTER barrels straight past TARGET, throwing them off balance.',
      'TARGET sidesteps CHARACTER, putting CHARACTER off balance.',
      "TARGET manages to dodge CHARACTER's tackle, sending CHARACTER reeling, unbalanced.",
      'CHARACTER misses TARGET, altogether, and finds themselves tipping over.',
      "TARGET's fright turns to laughter as CHARACTER miscalculates their trajectory, careening off balance.",
      'CHARACTER forgets to lock their arms around TARGET, bouncing right off, struggling to find their footing.',
    ],
    ENEMY: [
      'CHARACTER barrels straight past you, throwing them off balance.',
      'You sidestep CHARACTER, putting them off balance.',
      "You manage to dodge CHARACTER's tackle, sending CHARACTER reeling, unbalanced.",
      'CHARACTER misses you, altogether, and finds themselves tipping over.',
      'Your fright turns to laughter as CHARACTER miscalculates their trajectory, careening off balance.',
      'CHARACTER forgets to lock their arms around you, bouncing right off, struggling to find their footing.',
    ],
  },
  counterTrips,
  counterAttacks,
}

export const strangle = {
  attempts: {
    USER: [
      "You wrap your fingers with deadly ambition around TARGET's throat.",
      "Wanting to end them for good, you grasp TARGET's neck and squeeze with all your strength.",
      "Your life on the line, your fingers curl around TARGET's throat, constricting their breathing, clutching tighter and tighter.",
      'TARGET throws their hands at you to push you away, but you find your grip on their neck, regardless.',
      'You come behind TARGET and wrap your arm around their windpipe, struggling to hold them in place as they flail.',
      "Your visage darkens. You let out something guttural and reach at TARGET's neck, trying to squeeze the life out of them.",
    ],
    CHARACTER: [
      "CHARACTER wraps their fingers with deadly ambition around TARGET's throat.",
      "Wanting to end them for good, CHARACTER grasps TARGET's neck and squeezes with all their strength.",
      "CHARACTER's life on the line, their fingers curl around TARGET's throat, constricting their breathing, clutching tighter and tighter.",
      "TARGET throws their hands at CHARACTER to push them away, but CHARACTER finds their grip on TARGET's neck, regardless.",
      "CHARACTER comes behind TARGET and wraps their arm around TARGET's windpipe, struggling to hold them in place as they flail.",
      "CHARACTER's visage darkens. They let out something guttural and reach at TARGET's neck, trying to squeeze the life out of them.",
    ],
    ENEMY: [
      'CHARACTER wraps their fingers with deadly ambition around your throat.',
      'Wanting to end you for good, CHARACTER grasps your neck and squeezes with all their strength.',
      "CHARACTER's life on the line, their fingers curl around your throat, constricting your breathing, clutching tighter and tighter.",
      'You throw your hands at CHARACTER to push them away, but CHARACTER finds their grip on your neck, regardless.',
      'CHARACTER comes behind you and wraps their arm around your windpipe, struggling to hold you in place as you flail.',
      "CHARACTER's visage darkens. They let out something guttural and reach at your neck, trying to squeeze the life out of you.",
    ],
  },
  successes: {
    USER: [
      "TARGET's body becomes limp, as they fall unconscious",
      "TARGET's hands and feet twitch as they fall senseless.",
      'Your grip succeeds, and TARGET slips into sleep.',
      'TARGET passes out, their body slumping under their weight.',
      "Unnatural sounds pass through TARGET's lips until they are silent and dead to the world.",
      "TARGET's eyes fade. They black out in your embrace.",
    ],
    CHARACTER: [
      "TARGET's body becomes limp, as they fall unconscious",
      "TARGET's hands and feet twitch as they fall senseless.",
      "CHARACTER's grip succeeds, and TARGET slips into sleep.",
      'TARGET passes out, their body slumping under their weight.',
      "Unnatural sounds pass through TARGET's lips until they are silent and dead to the world.",
      "TARGET's eyes fade. They black out in CHARACTER's embrace.",
    ],
    ENEMY: [
      'Your body becomes limp, as you fall unconscious',
      'Your hands and feet twitch as you fall senseless.',
      "CHARACTER's grip succeeds, and you slip into sleep.",
      'You pass out, your body slumping under your weight.',
      'Unnatural sounds pass through your lips until you are silent and dead to the world.',
      "Your eyes fade. You black out in CHARACTER's embrace.",
    ],
  },
  failures: {
    USER: [
      'TARGET easily swats you away, breaking free from your grasp.',
      'TARGET pries your fingers from their throat and wriggles away.',
      'Your hands tire and TARGET breaks free, gasping for new breath.',
      'TARGET manages to push you off of them, and they catch their breath.',
      "You shriek in surprise as TARGET's hand finds your eye. You let go before they can cause any real damage.",
      "TARGET's strength surprises you as they pull you closer and bite you, forcing you to let go.",
    ],
    CHARACTER: [
      'TARGET easily swats CHARACTER away, breaking free from their grasp.',
      "TARGET pries CHARACTER's fingers from their throat and wriggles away.",
      "CHARACTER's hands tire and TARGET breaks free, gasping for new breath.",
      'TARGET manages to push CHARACTER off of them, and they catch their breath.',
      "CHARACTER shrieks in surprise as TARGET's hand finds CHARACTER's eye. CHARACTER lets go before TARGET can cause any real damage.",
      "TARGET's strength surprises CHARACTER as they pull CHARACTER closer and bite them, forcing them to let go.",
    ],
    ENEMY: [
      'You easily swat CHARACTER away, breaking free from their grasp.',
      "You pry CHARACTER's fingers from your throat and wriggle away.",
      "CHARACTER's hands tire and you break free, gasping for new breath.",
      'You manage to push CHARACTER off of you, and you catch your breath.',
      "CHARACTER shrieks in surprise as your hand finds CHARACTER's eye. CHARACTER lets go before you can cause any real damage.",
      'Your strength surprises CHARACTER as you pull CHARACTER closer and bite them, forcing them to let go.',
    ],
  },
}
