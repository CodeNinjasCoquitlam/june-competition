
// Game logic
namespace SpriteKind {
    export const Bonus = SpriteKind.create()
}
let p1 = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 4 b
    b d d c d 5 5 b 5 4 4 4 4 4 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`
let p2 = img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`
let p3 = img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
`
let p4 = img`
    . . . . f f f f f . . . . . . .
    . . . f e e e e e f . . . . . .
    . . f d d d d e e e f . . . . .
    . c d f d d f d e e f f . . . .
    . c d f d d f d e e d d f . . .
    c d e e d d d d e e b d c . . .
    c d d d d c d d e e b d c . . .
    c c c c c d d e e e f c . . . .
    . f d d d d e e e f f . . . . .
    . . f f f f f e e e e f . . . .
    . . . . f f e e e e e e f . f f
    . . . f e e f e e f e e f . e f
    . . f e e f e e f e e e f . e f
    . f b d f d b f b b f e f f e f
    . f d d f d d f d d b e f f f f
    . . f f f f f f f f f f f f f .
`
let numPlayers_global = 0
function createPlayers(numPlayers : number) {
    let player_images = [p1, p2, p3, p4]
    // Player 1 
    for (let i = 0; i < numPlayers; i++) {
        let player: Sprite
        mp.setPlayerSprite(mp.playerSelector(i + 1), player = sprites.create(player_images[i], SpriteKind.Player))
        //mp.moveWithButtons(mp.playerSelector(i + 1))

    }
    numPlayers_global = numPlayers
}
browserEvents.setKeyboardRepeatDefault(0, 5)
let diag = Math.sqrt(2) / 4

// Player 1 controls
browserEvents.W.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 0) {
        let p_1 = mp.getPlayerSprite(mp.playerSelector(1))
        if(browserEvents.A.isPressed()) {
            p_1.y -= diag
            p_1.x -= diag
        }
        else if (browserEvents.D.isPressed()) {
            p_1.y -= diag
            p_1.x += diag
        }
        else {
            p_1.y -= 1
        }
    }
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 0) {
        let p_1 = mp.getPlayerSprite(mp.playerSelector(1))
        if (browserEvents.W.isPressed()) {
            p_1.y -= diag
            p_1.x -= diag
        }
        else if (browserEvents.S.isPressed()) {
            p_1.y += diag
            p_1.x -= diag
        }
        else {
            p_1.x -= 1
        }
    }
})
browserEvents.S.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 0) {
        let p_1 = mp.getPlayerSprite(mp.playerSelector(1))
        if (browserEvents.A.isPressed()) {
            p_1.y += diag
            p_1.x -= diag
        }
        else if (browserEvents.D.isPressed()) {
            p_1.y += diag
            p_1.x += diag
        }
        else {
            p_1.y += 1
        }
    }
})
browserEvents.D.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 0) {
        let p_1 = mp.getPlayerSprite(mp.playerSelector(1))
        if (browserEvents.W.isPressed()) {
            p_1.y -= diag
            p_1.x += diag
        }
        else if (browserEvents.S.isPressed()) {
            p_1.y += diag
            p_1.x += diag
        }
        else {
            p_1.x += 1
        }
    }
})

browserEvents.ArrowUp.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 1) {
        let p = mp.getPlayerSprite(mp.playerSelector(2))
        if (browserEvents.ArrowLeft.isPressed()) {
            p.y -= diag
            p.x -= diag
        }
        else if (browserEvents.ArrowRight.isPressed()) {
            p.y -= diag
            p.x += diag
        }
        else {
            p.y -= 1
        }
    }
})
browserEvents.ArrowLeft.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 1) {
        let p = mp.getPlayerSprite(mp.playerSelector(2))
        if (browserEvents.ArrowUp.isPressed()) {
            p.y -= diag
            p.x -= diag
        }
        else if (browserEvents.ArrowDown.isPressed()) {
            p.y += diag
            p.x -= diag
        }
        else {
            p.x -= 1
        }
    }
})
browserEvents.ArrowDown.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 1) {
        let p = mp.getPlayerSprite(mp.playerSelector(2))
        if (browserEvents.ArrowRight.isPressed()) {
            p.y += diag
            p.x += diag
        }
        else if (browserEvents.ArrowLeft.isPressed()) {
            p.y += diag
            p.x -= diag
        }
        else {
            p.y += 1
        }
    }
})
browserEvents.ArrowRight.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 1) {
        let p = mp.getPlayerSprite(mp.playerSelector(2))
        if (browserEvents.ArrowUp.isPressed()) {
            p.y -= diag
            p.x += diag
        }
        else if (browserEvents.ArrowDown.isPressed()) {
            p.y += diag
            p.x += diag
        }
        else {
            p.x += 1
        }
    }
})

browserEvents.I.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 2) {
        let p = mp.getPlayerSprite(mp.playerSelector(3))
        if (browserEvents.J.isPressed()) {
            p.y -= diag
            p.x -= diag
        }
        else if (browserEvents.L.isPressed()) {
            p.y -= diag
            p.x += diag
        }
        else {
            p.y -= 1
        }
    }
})
browserEvents.J.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 2) {
        let p = mp.getPlayerSprite(mp.playerSelector(3))
        if (browserEvents.I.isPressed()) {
            p.y -= diag
            p.x -= diag
        }
        else if (browserEvents.K.isPressed()) {
            p.y += diag
            p.x -= diag
        }
        else {
            p.x -= 1
        }
    }
})
browserEvents.K.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 2) {
        let p = mp.getPlayerSprite(mp.playerSelector(3))
        if (browserEvents.J.isPressed()) {
            p.y += diag
            p.x -= diag
        }
        else if (browserEvents.L.isPressed()) {
            p.y += diag
            p.x += diag
        }
        else {
            p.y += 1
        }
    }
})
browserEvents.L.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 2) {
        let p = mp.getPlayerSprite(mp.playerSelector(3))
        if (browserEvents.I.isPressed()) {
            p.y -= diag
            p.x += diag
        }
        else if (browserEvents.K.isPressed()) {
            p.y += diag
            p.x += diag
        }
        else {
            p.x += 1
        }
    }
})

browserEvents.Eight.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 3) {
        let p = mp.getPlayerSprite(mp.playerSelector(4))
        if (browserEvents.Four.isPressed()) {
            p.y -= diag
            p.x -= diag
        }
        else if (browserEvents.Six.isPressed()) {
            p.y -= diag
            p.x += diag
        }
        else {
            p.y -= 1
        }
    }
})
browserEvents.Four.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 3) {
        let p = mp.getPlayerSprite(mp.playerSelector(4))
        if (browserEvents.Eight.isPressed()) {
            p.y -= diag
            p.x -= diag
        }
        else if (browserEvents.Five.isPressed()) {
            p.y += diag
            p.x -= diag
        }
        else {
            p.x -= 1
        }
    }
})
browserEvents.Five.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 3) {
        let p = mp.getPlayerSprite(mp.playerSelector(4))
        if (browserEvents.Four.isPressed()) {
            p.y += diag
            p.x -= diag
        }
        else if (browserEvents.Six.isPressed()) {
            p.y += diag
            p.x += diag
        }
        else {
            p.y += 1
        }
    }
})
browserEvents.Six.onEvent(browserEvents.KeyEvent.Repeat, function () {
    if (numPlayers_global > 3) {
        let p = mp.getPlayerSprite(mp.playerSelector(4))
        if (browserEvents.Eight.isPressed()) {
            p.y -= diag
            p.x += diag
        }
        else if (browserEvents.Five.isPressed()) {
            p.y += diag
            p.x += diag
        }
        else {
            p.x += 1
        }
    }
})

createPlayers(4)


for (let player of sprites.allOfKind(SpriteKind.Player)) {
    player.setStayInScreen(true)
    mp.setPlayerState(mp.getPlayerBySprite(player), MultiplayerState.score, 0)
}
//info.setScore(0)
scene.setBackgroundColor(10)
game.setDialogFrame(img`
    8888.....88....888....88.88....888....888...8888
    867788..8768..86768..8678768..86768..8678.887768
    8767768.8777886767688777877788676768877788677678
    877677686767787767787767676778776778776786776778
    .8778766677678776778767767767877677876778678778.
    .8677866867668676768667686766867676866766687768.
    ..86668688676886868867688867688686886768686668..
    .888666888888888888888888888888888888888866688..
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87768866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87766866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    ..886668888888888888888888888888888888888666888.
    ..86668686768868688676888676886868867688686668..
    .8677866676686767686676867668676768667686687768.
    .8778768776787767787677677678776778767766678778.
    877677687677877677877676767787767787767686776778
    8767768877788676768877787778867676887778.8677678
    867788.8768..86768..8678768..86768..8678..887768
    8888...888....888....88.88....888....88.....8888
`)
game.showLongText("Eat all the fruits.\n Veggies are worth extra.\n Avoid the junk food!!\nAnswer the questions for bonus points!!!\nGood luck Ninja!", DialogLayout.Full)
function invincibility (sprite: Sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
    timer.after(1000, function () {
        sprite.setFlag(SpriteFlag.Ghost, false)
    })
}

game.onUpdateInterval(300, function () {
    if (Math.percentChance(25)) {
        mySprite2 = sprites.create(img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `, SpriteKind.Food)
    } else if (Math.percentChance(25)) {
        mySprite2 = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, SpriteKind.Food)
    } else if (Math.percentChance(25)) {
        mySprite2 = sprites.create(img`
            4 4 4 . . 4 4 4 4 4 . . . . . . 
            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
            . . . . c c b 4 4 4 b b 4 5 4 4 
            . . . . . . c c c c c c b b 4 . 
            `, SpriteKind.Food)
    } else if (Math.percentChance(15)) {
        mySprite2 = sprites.create(img`
            . . . . . 3 3 b 3 3 d d 3 3 . . 
            . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
            . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
            . 4 4 d 1 1 1 1 1 1 d d d b b . 
            . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
            4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
            4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
            4 5 5 d 5 5 d b b b d d 3 . . . 
            4 5 5 5 d d d d 4 4 b 3 . . . . 
            . 4 5 5 5 4 4 4 . . . . . . . . 
            . . 4 4 4 . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.lifespan = 5000
        invincibility(mySprite2)
    } else {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f 7 f 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 4 4 7 f . . . . . . 
            . . . . . f 4 4 7 f . . . . . . 
            . . . . f 4 4 e 7 7 f f . . . . 
            . . . . f 4 4 4 4 7 7 7 f . . . 
            . . . f 4 4 4 4 e f f f . . . . 
            . . . f 4 4 4 e f . . . . . . . 
            . . . f 4 4 4 e f . . . . . . . 
            . . f 4 4 e e f . . . . . . . . 
            . . f 4 4 f f . . . . . . . . . 
            . . f f f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Bonus)
    }
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
})


sprites.onOverlap(SpriteKind.Player, SpriteKind.Bonus, function (sprite, otherSprite) {
    sprites
    sprites.destroy(otherSprite)
    specialScore(sprite, 5, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    specialScore(sprite, 1, 250)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    specialScore(sprite, -20, 1000)
})
let mySprite2: Sprite = null
let textSprite: TextSprite = null

function specialScore(sprite : Sprite, points: number, dur: number) {
    let pointsString = points.toString()
    if (points > 0) pointsString = "+" + points.toString()
    textSprite = textsprite.create(pointsString)
    textSprite.setPosition(sprite.x, sprite.y)
    textSprite.lifespan = dur
    mp.changePlayerStateBy(mp.playerSelector(mp.getPlayerProperty(mp.getPlayerBySprite(sprite), mp.PlayerProperty.Number)), MultiplayerState.score, points)

}
//

// Trivia logic
let Question = ""
let chars: number[] = []
let questions: string[] = []
let index = 0
let bonusPoints = 25
let answers: string[] = []
let multipleChoice: string[][] = []
let time = 30
questions = [
    "Which letter represents horizontal (sideways) position or movement? (Enter the option)", 
    "Which letter represents vertical (up & down) position or movement? (Enter the option)",
    "What is a program?",
    "What is coding?",
    "What is a sprite in a game?",
    "How do you make a sprite move in Make Code Arcade?",
    "What is an event in coding?",
    "What does a loop do?",
    "What is a sequence?",
    "Why is the order of code important?",
    "Which of these is an example of an input in a game?",
    "What is a variable used for in coding?",
    "What is debugging?"
            ]
multipleChoice = [
    ["x", "y", "z", "h"],
    ["y", "x", "z", "v"],
    ["A set of instructions for a computer", "A game",  "A computer screen", "A robot"],
    ["Writing instructions for a computer", "Playing games" , "Drawing pictures", "Watching videos"],
    ["A character or object", "A type of computer", "A sound effect", "A background"],
    ["Using a 'move mySprite with buttons' block", "Clicking the mouse", "Telling the sprite to move", "Turning off the computer"],
    ["Something that starts an action", "A bug", "A coding language", "A loop"],
    ["Repeats code multiple times", "Stops the program", "Changes the background colour", "Starts the game"],
    ["Steps or instructions in a certain order", "Blocks of code", "The start of the game"],
    ["It might change how the program works", "It isn't", "It makes the computer faster", "It makes coding harder"],
    ["Pressing the space bar", "The score increasing", "A sprite moving automatically", "Adding background music"],
    ["To store information", "To draw pictures", "To close the game", "To install software"],
    ["Finding and fixing mistakes in code","Decorating a game", "Uploading a game online", "Playing games with friends"]
    ]
function shuffle(arr: string[]) {
    let shuffled : string[] = []
    let answerMoved = false;
    while (arr.length > 0) {
        let q = randint(0, arr.length - 1)
        shuffled.push(arr.removeAt(q))
        if (q == 0 && !answerMoved) {
            answerMoved = true
            switch (shuffled.length) {
                case 1:
                    answers.push("a")
                    break
                case 2:
                    answers.push("b")
                    break
                case 3:
                    answers.push("c")
                    break
                case 4:
                    answers.push("d")
                    break
                default:
                    break
            }
        }
    }
    return shuffled
}
let letters = ["A) ", "B) ", "C) ", "D) "]

let questionsWithChoices: string[] = []
for (let i = 0; i < questions.length; i++) {
    let l_index = 0;
    questionsWithChoices.push(questions[i])
    let choices = shuffle(multipleChoice[i])
    for (let c of choices) {
        questionsWithChoices[i] += "\n" + letters[l_index++] + c
    }
}


info.startCountdown(time)
let password_entry = game.askForNumber("Enter the password", 6)
let Password = 131815
if (password_entry != Password) {
    game.setGameOverMessage(false, "Incorrect Password")
    game.gameOver(false)
}
game.splash("Press A to start")

info.onCountdownEnd(function () {
    if (questionsWithChoices.length == 0) {
        game.gameOver(true)
    }
    index = randint(0, questionsWithChoices.length - 1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Bonus)

    
    game.setDialogFrame(img` `)
    let currentQuestion = questionsWithChoices.removeAt(index)
    showQuestion(currentQuestion)
    while (Question.toLowerCase() == 'e') {
        showQuestion(currentQuestion)
    }
    if (Question.toLowerCase() == answers.removeAt(index).toLowerCase()) {
        info.changeScoreBy(bonusPoints)
        game.splash("Great Job! +" + bonusPoints + ". Keep Going!")
    }  else {
        game.splash("Sorry, that's incorrect :( Keep trying!")
    }
    info.startCountdown(time)
})

function showQuestion(q : string) {
    game.showLongText(q, DialogLayout.Full)
    pause(500)
    Question = game.askForString("Press e to see the question again", 1)
}

