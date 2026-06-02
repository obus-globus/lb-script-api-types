import type { InputConstants$Key } from '../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KeyEvent } from '../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { GLFWCharCallbackI } from '../../../../org/lwjgl/glfw/GLFWCharCallbackI.d.ts'
import type { GLFWCursorPosCallbackI } from '../../../../org/lwjgl/glfw/GLFWCursorPosCallbackI.d.ts'
import type { GLFWDropCallbackI } from '../../../../org/lwjgl/glfw/GLFWDropCallbackI.d.ts'
import type { GLFWIMEStatusCallbackI } from '../../../../org/lwjgl/glfw/GLFWIMEStatusCallbackI.d.ts'
import type { GLFWKeyCallbackI } from '../../../../org/lwjgl/glfw/GLFWKeyCallbackI.d.ts'
import type { GLFWMouseButtonCallbackI } from '../../../../org/lwjgl/glfw/GLFWMouseButtonCallbackI.d.ts'
import type { GLFWPreeditCallbackI } from '../../../../org/lwjgl/glfw/GLFWPreeditCallbackI.d.ts'
import type { GLFWScrollCallbackI } from '../../../../org/lwjgl/glfw/GLFWScrollCallbackI.d.ts'
export class InputConstants extends Object {
    static CURSOR: number;
    static CURSOR_DISABLED: number;
    static CURSOR_NORMAL: number;
    static KEY_0: number;
    static KEY_1: number;
    static KEY_2: number;
    static KEY_3: number;
    static KEY_4: number;
    static KEY_5: number;
    static KEY_6: number;
    static KEY_7: number;
    static KEY_8: number;
    static KEY_9: number;
    static KEY_A: number;
    static KEY_ADD: number;
    static KEY_APOSTROPHE: number;
    static KEY_B: number;
    static KEY_BACKSLASH: number;
    static KEY_BACKSPACE: number;
    static KEY_C: number;
    static KEY_CAPSLOCK: number;
    static KEY_COMMA: number;
    static KEY_D: number;
    static KEY_DELETE: number;
    static KEY_DOWN: number;
    static KEY_E: number;
    static KEY_END: number;
    static KEY_EQUALS: number;
    static KEY_ESCAPE: number;
    static KEY_F: number;
    static KEY_F1: number;
    static KEY_F10: number;
    static KEY_F11: number;
    static KEY_F12: number;
    static KEY_F13: number;
    static KEY_F14: number;
    static KEY_F15: number;
    static KEY_F16: number;
    static KEY_F17: number;
    static KEY_F18: number;
    static KEY_F19: number;
    static KEY_F2: number;
    static KEY_F20: number;
    static KEY_F21: number;
    static KEY_F22: number;
    static KEY_F23: number;
    static KEY_F24: number;
    static KEY_F25: number;
    static KEY_F3: number;
    static KEY_F4: number;
    static KEY_F5: number;
    static KEY_F6: number;
    static KEY_F7: number;
    static KEY_F8: number;
    static KEY_F9: number;
    static KEY_G: number;
    static KEY_GRAVE: number;
    static KEY_H: number;
    static KEY_HOME: number;
    static KEY_I: number;
    static KEY_INSERT: number;
    static KEY_J: number;
    static KEY_K: number;
    static KEY_L: number;
    static KEY_LALT: number;
    static KEY_LBRACKET: number;
    static KEY_LCONTROL: number;
    static KEY_LEFT: number;
    static KEY_LSHIFT: number;
    static KEY_LSUPER: number;
    static KEY_M: number;
    static KEY_MINUS: number;
    static KEY_MULTIPLY: number;
    static KEY_N: number;
    static KEY_NUMLOCK: number;
    static KEY_NUMPAD0: number;
    static KEY_NUMPAD1: number;
    static KEY_NUMPAD2: number;
    static KEY_NUMPAD3: number;
    static KEY_NUMPAD4: number;
    static KEY_NUMPAD5: number;
    static KEY_NUMPAD6: number;
    static KEY_NUMPAD7: number;
    static KEY_NUMPAD8: number;
    static KEY_NUMPAD9: number;
    static KEY_NUMPADCOMMA: number;
    static KEY_NUMPADENTER: number;
    static KEY_NUMPADEQUALS: number;
    static KEY_O: number;
    static KEY_P: number;
    static KEY_PAGEDOWN: number;
    static KEY_PAGEUP: number;
    static KEY_PAUSE: number;
    static KEY_PERIOD: number;
    static KEY_PRINTSCREEN: number;
    static KEY_Q: number;
    static KEY_R: number;
    static KEY_RALT: number;
    static KEY_RBRACKET: number;
    static KEY_RCONTROL: number;
    static KEY_RETURN: number;
    static KEY_RIGHT: number;
    static KEY_RSHIFT: number;
    static KEY_RSUPER: number;
    static KEY_S: number;
    static KEY_SCROLLLOCK: number;
    static KEY_SEMICOLON: number;
    static KEY_SLASH: number;
    static KEY_SPACE: number;
    static KEY_T: number;
    static KEY_TAB: number;
    static KEY_U: number;
    static KEY_UP: number;
    static KEY_V: number;
    static KEY_W: number;
    static KEY_X: number;
    static KEY_Y: number;
    static KEY_Z: number;
    static MOD_ALT: number;
    static MOD_CAPS_LOCK: number;
    static MOD_CONTROL: number;
    static MOD_NUM_LOCK: number;
    static MOD_SHIFT: number;
    static MOD_SUPER: number;
    static MOUSE_BUTTON_4: number;
    static MOUSE_BUTTON_5: number;
    static MOUSE_BUTTON_6: number;
    static MOUSE_BUTTON_7: number;
    static MOUSE_BUTTON_8: number;
    static MOUSE_BUTTON_LEFT: number;
    static MOUSE_BUTTON_MIDDLE: number;
    static MOUSE_BUTTON_RIGHT: number;
    static PRESS: number;
    static RELEASE: number;
    static REPEAT: number;
    static UNKNOWN: InputConstants$Key;
    static getKey(paramname: string): InputConstants$Key;
    static getKey(paramevent: KeyEvent): InputConstants$Key;
    static grabOrReleaseMouse(paramwindow: Window, paramcursorMode: number, paramxpos: number, paramypos: number): void;
    static isKeyDown(paramwindow: Window, paramkey: number): boolean;
    static isRawMouseInputSupported(): boolean;
    static setupKeyboardCallbacks(paramwindow: Window, paramkeyPressCallback: (param0: number, param1: number, param2: number, param3: number, param4: number) => void, paramcharTypedCallback: (param0: number, param1: number) => void, parampreeditCallback: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => void, paramimeStatusCallback: (param0: number) => void): void;
    static setupMouseCallbacks(paramwindow: Window, paramonMoveCallback: (param0: number, param1: number, param2: number) => void, paramonPressCallback: (param0: number, param1: number, param2: number, param3: number) => void, paramonScrollCallback: (param0: number, param1: number, param2: number) => void, paramonDropCallback: (param0: number, param1: number, param2: number) => void): void;
    static updateRawMouseInput(paramwindow: Window, paramvalue: boolean): void;
    constructor()
}