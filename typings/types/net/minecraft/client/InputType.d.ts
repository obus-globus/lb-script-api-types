import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class InputType extends Enum<InputType> {
    static KEYBOARD_ARROW: InputType;
    static KEYBOARD_TAB: InputType;
    static MOUSE: InputType;
    static NONE: InputType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InputType;
    static values(): InputType[];
    private constructor()
    isKeyboard(): boolean;
    isMouse(): boolean;
    name(): "NONE" | "MOUSE" | "KEYBOARD_ARROW" | "KEYBOARD_TAB";
}