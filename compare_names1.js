function jout(arg) {
    console.log(arg);
}

// returns boolean: that's if at least an item  in grp2 exits in grp1
function compare1(grp1, grp2) {
    'use strict';
	let inGroup = false;
    for (let i = 0; i < grp2.length; i++) {
        for (let k = 0; k < grp1.length; k++) {
            if (grp1[k] === grp2[i]) {
                jout (`${grp2[k]} is in group 1`);
				inGroup = true;
				return;
            }
        }        
    }
	return inGroup;
}



compare1(['moot', 'eel', 'bar', 'toy', 'car', 'drone', 'furniture', 'foo'], ['moot', 'drone', 'foo', 'toy']);
console.log("=============================");



// returns array: arrays of items of grp1 in grp1
function compare2(grp1, grp2) {
    'use strict';
	var matchs = [];
    for (let i = 0; i < grp2.length; i++) {
        for (let k = 0; k < grp1.length; k++) {
            if (grp1[k] === grp2[i]) {
				matchs.push(grp2[i]);                			
            }
        }        
    }
	return matchs;
}

console.log(compare2(['eel', 'bar', 'toy', 'car', 'drone', 'furniture', 'foo'], ['eel', 'moot', 'drone', 'foo', 'toy']));
console.log("=============================");


 
