import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InputWithModifiers } from '../../../../net/minecraft/client/input/InputWithModifiers.d.ts'
import type { MouseButtonInfo } from '../../../../net/minecraft/client/input/MouseButtonInfo.d.ts'
export class MouseButtonEvent extends Record implements InputWithModifiers {
    static NOT_DIGIT: number;
    // private buttonInfo: MouseButtonInfo;
    // private x: number;
    // private y: number;
    button(): number;
    buttonInfo(): MouseButtonInfo;
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
    modifiers(): number;
    toString(): string;
    x(): number;
    y(): number;
}