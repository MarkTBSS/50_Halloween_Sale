function howManyGames(p, d, m, s) {
    var gameCount = 0
    while(s >= m && p >= m) {
        s -= p
        gameCount++
        console.log(s)
        p -= d
    }
    p = m                               
    console.log(p)                      
    console.log(s)                      
    var afterSix = s / p                
    console.log(afterSix)               
    afterSix = Math.floor(afterSix)     
    console.log(afterSix)                      
    gameCount += afterSix               
    return gameCount                    
}

p = 20      
d = 3       
m = 6        
s = 80
// output 6
console.log(howManyGames(p, d, m, s))

/* p = 20      
d = 3       
m = 6        
s = 80
// output 6 */

/* p = 89     
d = 60      
m = 27        
s = 2777
// output 285 */