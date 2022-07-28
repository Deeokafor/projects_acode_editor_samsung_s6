function compare(grp1, grp2) {
    'use strict';
    let sim=[];
    for (let i = 0; i < grp1.length; i++) {
        for (let k = 0; k < grp2.length; k++) {
            if (grp1[i][0] === grp2[k][0]) {
              sim.push(grp1[i]);
            }
        }
        
    }
    console.log(sim.length<1 ? "No match Found" : sim);
    
    if (sim.length > 0) {
        for (let i = 0; i < sim.length; i++) {
            console.log(`${sim[i]} is found in both groups`);
        }
    }
    
}

compare([['eel', 'one', 'two', 'three']], [['eel']]);