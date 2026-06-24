import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Dim2i extends Record {
    constructor(x: number, y: number, width: number, height: number)
    // private height: number;
    // private width: number;
    // private x: number;
    // private y: number;
    containsCursor(arg0: number, arg1: number): boolean;
    equals(arg0: Object | null): boolean;
    getCenterX(): number;
    getCenterY(): number;
    getLimitX(): number;
    getLimitY(): number;
    hashCode(): number;
    height(): number;
    inset(arg0: number, arg1: number, arg2: number, arg3: number): Dim2i;
    insetBottom(arg0: number): Dim2i;
    insetLeft(arg0: number): Dim2i;
    insetRight(arg0: number): Dim2i;
    insetTop(arg0: number): Dim2i;
    insetX(arg0: number): Dim2i;
    insetY(arg0: number): Dim2i;
    toString(): string;
    width(): number;
    x(): number;
    y(): number;
}