import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InputWithModifiers extends Object{
    getDigit(): number;
    hasAltDown(): boolean;
    hasControlDown(): boolean;
    hasControlDownWithQuirk(): boolean;
    hasShiftDown(): boolean;
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
}