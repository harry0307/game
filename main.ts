input.onButtonPressed(Button.A, function () {
    角色.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    角色.turn(Direction.Right, 90)
})
let 角色: game.LedSprite = null
角色 = game.createSprite(2, 2)
角色.set(LedSpriteProperty.Brightness, 300)
let 水果 = game.createSprite(randint(0, 4), randint(0, 4))
水果.set(LedSpriteProperty.Brightness, 100)
let 障礙 = game.createSprite(randint(0, 4), randint(0, 4))
障礙.set(LedSpriteProperty.Blink, 100)
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    角色.move(1)
    basic.pause(1000)
    if (角色.isTouching(水果)) {
        水果.delete()
        水果 = game.createSprite(randint(0, 4), randint(0, 4))
        水果.set(LedSpriteProperty.Brightness, 100)
        game.addScore(1)
    }
    if (角色.isTouching(障礙)) {
        障礙.delete()
        障礙 = game.createSprite(randint(0, 4), randint(0, 4))
        障礙.set(LedSpriteProperty.Blink, 100)
        game.removeLife(1)
    }
})
