const maneuvers = [
    // Basic moves
    { name: "headlock", difficulty: 2, excitement: 2, danger: 1, highFlying: 1, brawling: 2, technical: 3 },
    { name: "hip toss", difficulty: 3, excitement: 3, danger: 2, highFlying: 1, brawling: 2, technical: 4 },
    { name: "wrist lock", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 1, technical: 3 },
    { name: "snapmare", difficulty: 3, excitement: 3, danger: 2, highFlying: 1, brawling: 2, technical: 3 },
    { name: "arm wrench", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 1, technical: 3 },
    { name: "knife-edge chop", difficulty: 3, excitement: 3, danger: 2, highFlying: 1, brawling: 4, technical: 2 },
    { name: "shoulder block", difficulty: 3, excitement: 3, danger: 2, highFlying: 1, brawling: 4, technical: 2 },
    { name: "elbow smash", difficulty: 3, excitement: 3, danger: 2, highFlying: 1, brawling: 4, technical: 2 },
    { name: "forearm smash", difficulty: 3, excitement: 3, danger: 2, highFlying: 1, brawling: 4, technical: 2 },
    { name: "stomp", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 3, technical: 2 },
    { name: "back rake", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 3, technical: 1 },
    { name: "standing splash", difficulty: 4, excitement: 4, danger: 3, highFlying: 3, brawling: 2, technical: 2 },
    { name: "leg drop", difficulty: 4, excitement: 4, danger: 3, highFlying: 2, brawling: 3, technical: 2 },
    { name: "running clothesline", difficulty: 4, excitement: 4, danger: 3, highFlying: 1, brawling: 5, technical: 2 },
    { name: "chop block", difficulty: 3, excitement: 3, danger: 2, highFlying: 0, brawling: 3, technical: 3 },
    { name: "scoop slam", difficulty: 4, excitement: 4, danger: 3, highFlying: 1, brawling: 4, technical: 3 },
    { name: "side headlock takedown", difficulty: 3, excitement: 3, danger: 2, highFlying: 1, brawling: 2, technical: 4 },
    { name: "single-leg takedown", difficulty: 3, excitement: 3, danger: 2, highFlying: 0, brawling: 3, technical: 4 },
    { name: "kick to the gut", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 4, technical: 2 },
    { name: "spinning back kick", difficulty: 4, excitement: 4, danger: 3, highFlying: 3, brawling: 4, technical: 3 },
    { name: "headbutt", difficulty: 3, excitement: 3, danger: 2, highFlying: 0, brawling: 5, technical: 2 },
    { name: "running knee lift", difficulty: 4, excitement: 4, danger: 3, highFlying: 2, brawling: 4, technical: 3 },
    { name: "kneeling chinlock", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 1, technical: 3 },
    { name: "boot choke", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 4, technical: 1 },
    { name: "corner splash", difficulty: 4, excitement: 4, danger: 3, highFlying: 2, brawling: 4, technical: 2 },
    { name: "clubbing blow", difficulty: 3, excitement: 3, danger: 2, highFlying: 0, brawling: 5, technical: 2 },
    { name: "running forearm", difficulty: 4, excitement: 4, danger: 3, highFlying: 2, brawling: 4, technical: 2 },
    { name: "snap suplex", difficulty: 4, excitement: 5, danger: 4, highFlying: 1, brawling: 3, technical: 5 },
    { name: "toe kick", difficulty: 2, excitement: 2, danger: 1, highFlying: 0, brawling: 3, technical: 2 },
  
  
    // Technical moves
    { name: "suplex", difficulty: 6, excitement: 6, danger: 5, highFlying: 2, brawling: 3, technical: 7 },
    { name: "German suplex", difficulty: 7, excitement: 8, danger: 6, highFlying: 1, brawling: 5, technical: 8 },
    { name: "fisherman suplex", difficulty: 7, excitement: 8, danger: 6, highFlying: 1, brawling: 4, technical: 8 },
    { name: "belly-to-belly suplex", difficulty: 6, excitement: 6, danger: 5, highFlying: 1, brawling: 6, technical: 7 },
    { name: "northern lights suplex", difficulty: 8, excitement: 8, danger: 7, highFlying: 1, brawling: 4, technical: 9 },
    { name: "tiger suplex", difficulty: 9, excitement: 9, danger: 8, highFlying: 1, brawling: 5, technical: 9 },
    { name: "crossface", difficulty: 8, excitement: 8, danger: 6, highFlying: 1, brawling: 4, technical: 9 },
    { name: "ankle lock", difficulty: 8, excitement: 7, danger: 6, highFlying: 1, brawling: 3, technical: 9 },
    { name: "sharpshooter", difficulty: 8, excitement: 8, danger: 6, highFlying: 1, brawling: 3, technical: 9 },
  
    // Brawling moves
    { name: "punch combo", difficulty: 3, excitement: 4, danger: 3, highFlying: 1, brawling: 6, technical: 2 },
    { name: "big boot", difficulty: 4, excitement: 5, danger: 4, highFlying: 1, brawling: 7, technical: 2 },
    { name: "spinebuster", difficulty: 7, excitement: 7, danger: 6, highFlying: 1, brawling: 8, technical: 6 },
    { name: "spear", difficulty: 5, excitement: 7, danger: 5, highFlying: 1, brawling: 8, technical: 4 },
    { name: "DDT", difficulty: 6, excitement: 7, danger: 6, highFlying: 1, brawling: 7, technical: 5 },
    { name: "piledriver", difficulty: 10, excitement: 10, danger: 10, highFlying: 1, brawling: 9, technical: 9 },
    { name: "powerslam", difficulty: 6, excitement: 6, danger: 5, highFlying: 1, brawling: 8, technical: 5 },
    { name: "powerbomb", difficulty: 7, excitement: 7, danger: 6, highFlying: 1, brawling: 6, technical: 6 },
    { name: "chokeslam", difficulty: 7, excitement: 8, danger: 7, highFlying: 1, brawling: 7, technical: 3 },
  
    // High-flying moves
    { name: "moonsault", difficulty: 9, excitement: 9, danger: 9, highFlying: 9, brawling: 1, technical: 7 },
    { name: "frog splash", difficulty: 9, excitement: 10, danger: 9, highFlying: 10, brawling: 1, technical: 7 },
    { name: "450 splash", difficulty: 10, excitement: 10, danger: 10, highFlying: 10, brawling: 1, technical: 7 },
    { name: "springboard forearm", difficulty: 8, excitement: 8, danger: 7, highFlying: 8, brawling: 4, technical: 6 },
    { name: "hurricanrana", difficulty: 8, excitement: 9, danger: 7, highFlying: 9, brawling: 2, technical: 6 },
    { name: "tornado DDT", difficulty: 9, excitement: 9, danger: 8, highFlying: 9, brawling: 2, technical: 8 },
    { name: "elbow drop", difficulty: 8, excitement: 9, danger: 8, highFlying: 8, brawling: 2, technical: 4 },
    { name: "swan dive headbutt", difficulty: 9, excitement: 8, danger: 10, highFlying: 9, brawling: 3, technical: 5 },
    { name: "rope-assisted moonsault", difficulty: 10, excitement: 10, danger: 10, highFlying: 10, brawling: 1, technical: 8 },
  
    // Submission moves
    { name: "cobra clutch", difficulty: 4, excitement: 5, danger: 3, highFlying: 1, brawling: 6, technical: 5 },
    { name: "triangle choke", difficulty: 7, excitement: 7, danger: 6, highFlying: 1, brawling: 3, technical: 9 },
    { name: "liontamer", difficulty: 8, excitement: 8, danger: 7, highFlying: 1, brawling: 3, technical: 9 },
    { name: "sleeper hold", difficulty: 5, excitement: 4, danger: 3, highFlying: 1, brawling: 4, technical: 5 },
  
    // Finishing moves
    { name: "superkick", difficulty: 6, excitement: 8, danger: 6, highFlying: 2, brawling: 4, technical: 7 },
    { name: "Canadian destroyer", difficulty: 10, excitement: 10, danger: 10, highFlying: 9, brawling: 3, technical: 9 },
    { name: "death valley driver", difficulty: 9, excitement: 9, danger: 8, highFlying: 1, brawling: 7, technical: 7 },
    { name: "flying knee strike", difficulty: 8, excitement: 8, danger: 7, highFlying: 6, brawling: 6, technical: 5 },
  ];
  
  export default maneuvers;
  