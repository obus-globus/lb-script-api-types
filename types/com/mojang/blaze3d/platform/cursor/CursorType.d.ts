import type { Window } from '../../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CursorType extends Object {
    static DEFAULT: CursorType;
    static createStandardCursor(paramshape: number, paramname: string, paramfallback: CursorType): CursorType;
    private constructor(name: string, handle: number)
    // private handle: number;
    // private name: string;
    select(window: Window): void;
    toString(): string;
}