import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InputWithModifiers } from '../../../../net/minecraft/client/input/InputWithModifiers.d.ts'
export class KeyEvent extends Record implements InputWithModifiers {
    static NOT_DIGIT: number;
    constructor(key: number, scancode: number, modifiers: number)
    // private key: number;
    // private modifiers: number;
    // private scancode: number;
    equals(o: Object | null): boolean;
    getDigit(): number;
    hasAltDown(): boolean;
    hasControlDown(): boolean;
    hasControlDownWithQuirk(): boolean;
    hasShiftDown(): boolean;
    hashCode(): number;
    input(): number;
    isConfirmation(): boolean;
    isCopy(): boolean;
    isCut(): boolean;
    isCycleFocus(): boolean;
    isDown(): boolean;
    isEscape(): boolean;
    isLeft(): boolean;
    isPaste(): boolean;
    isRight(): boolean;
    isSelectAll(): boolean;
    isSelection(): boolean;
    isUp(): boolean;
    key(): number;
    modifiers(): number;
    scancode(): number;
    toString(): string;
}