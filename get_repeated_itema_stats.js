 
// 	Return array of object contain `item` - that was repeated; 
//	`count` - how many time it was repeated and
// 	`indexes - the index of each repeated item
function getRepeated(grp1, grp2){
	
	let matchs 			= [];
	var matchedIndex 	= null;
	for(var i = 0; i < grp2.length; i++){
		let element = grp2[i];
		if(grp1.includes(element)){
			
			if(matchsContains(element, matchs)){
				matchs[matchedIndex].count++;
				matchs[matchedIndex].indexes.push(i);
				
			}else{
				let match = {
					item: element,
					count: 1,
					indexes: [i]
				}; 
				matchs.push(match);
			}			
		}
 	}
		
	function matchsContains(needle, matchs){
		let itemExists = false;		
		if(matchs.length > 0){					
			for(var i = 0; i < matchs.length; i++){
				if(matchs[i].item == needle){
					itemExists = true;
					matchedIndex = i;
					break;
				}
			}
		}		
		return itemExists;
	}	
	
	return matchs;
	
 }
 
 let grp1 = ['eel', 'bar', 'toy', 'drone', 'radio', 'phone'];
 let grp2 = ['toy', 'drone', 'moot', 'foo', 'toy', 'eel', 'bar', 'toy', 'drone', 'radio', 'phone'];
 
console.log(getRepeated(grp1, grp2));
 
 