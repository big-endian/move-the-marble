let x = 0
let y = 0
let x1 = 0
let y1 = 0
basic.forever(function () {
    if (x != x1 || y != y1) {
        led.unplot(x1, y1)
        basic.pause(500)
    }
    x1 = x
    y1 = y
    if (input.rotation(Rotation.Roll) > 0) {
        x += 1
        if (x > 4) {
            x = 4
        }
    } else if (input.rotation(Rotation.Roll) < 0) {
        x += -1
        if (x < 0) {
            x = 0
        }
    }
    if (input.rotation(Rotation.Pitch) > 0) {
        y += 1
        if (y > 4) {
            y = 4
        }
    } else if (input.rotation(Rotation.Pitch) < 0) {
        y += -1
        if (y < 0) {
            y = 0
        }
    }
    led.plot(x, y)
    basic.pause(500)
})
