const refreshRate = 100;
// const output = document.getElementById('output');
// setInterval(getGamepadState, refreshRate);

export function getGamepadState() {
    // Returns up to 4 gamepads.
    const gamepads = navigator.getGamepads();
    // We take the first one, for simplicity
    const gamepad = gamepads[0];
    // Escape if no gamepad was found
    if (!gamepad) {
        console.log('No gamepad found.');
        return;
    }
    // Filter out only the buttons which are pressed
    const pressedButtons = gamepad.buttons
        .map((button, id) => ({
            id,
            button
        }))
        .filter(isPressed);
    // Print the pressed buttons to our HTML
    for (const button of pressedButtons) {
        console.log(button);
        console.log(`Button ${button.id} was pressed.`)
    }
}

export function isPressed({
    button: {
        pressed
    }
}) {
    return !!pressed;
}
