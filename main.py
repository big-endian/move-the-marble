x = 0
y = 0

def on_forever():
    global y, x
    led.unplot(x, y)
    if input.rotation(Rotation.PITCH) > 0:
        y += 1
    elif input.rotation(Rotation.PITCH) < 0:
        y += -1
    if input.rotation(Rotation.ROLL) > 0:
        x += 1
    elif input.rotation(Rotation.ROLL) < 0:
        x += -1
    if x < 0:
        x = 0
    elif x > 4:
        x = 4
    if y < 0:
        y = 0
    elif y > 4:
        y = 4
    led.plot(x, y)
basic.forever(on_forever)
