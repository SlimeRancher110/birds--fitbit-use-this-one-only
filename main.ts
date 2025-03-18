input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.pause(1000)
    basic.showNumber(Steps)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    index = 0
    obstacles = []
    bird = game.createSprite(0, 2)
    if (input.isGesture(Gesture.TiltLeft) == false) {
        bird.set(LedSpriteProperty.Blink, 300)
        while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
            obstacles.removeAt(0).delete()
        }
        for (let obstacles2 of obstacles) {
            obstacles2.change(LedSpriteProperty.X, -1)
        }
        if (ticks % 3 == 0) {
            empty0bstac1eY = randint(0, 4)
            for (let index2 = 0; index2 <= 4; index2++) {
                if (index2 != empty0bstac1eY) {
                    obstacles.push(game.createSprite(4, index2))
                }
            }
        }
        for (let obstacles3 of obstacles) {
            if (obstacles3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacles3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
                for (let index2 = 0; index2 < 1; index2++) {
                    basic.showString("GAME OVER")
                }
            }
        }
        ticks += 1
        basic.pause(1000)
    } else {
        basic.clearScreen()
        game.pause()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
    Target += -1
})
input.onGesture(Gesture.LogoDown, function () {
    for (let index2 = 0; index2 < 1; index2++) {
        basic.pause(500)
        basic.showNumber(Target)
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Target += 1000
})
let Target = 0
let empty0bstac1eY = 0
let ticks = 0
let obstacles: game.LedSprite[] = []
let index = 0
let Steps = 0
let bird: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
	
})
