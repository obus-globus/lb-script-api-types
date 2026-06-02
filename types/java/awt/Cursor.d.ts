import type { Cursor$CursorDisposer } from '../../java/awt/Cursor$CursorDisposer.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Cursor extends Object implements Serializable {
    static CROSSHAIR_CURSOR: number;
    static CUSTOM_CURSOR: number;
    static DEFAULT_CURSOR: number;
    static E_RESIZE_CURSOR: number;
    static HAND_CURSOR: number;
    static MOVE_CURSOR: number;
    static NE_RESIZE_CURSOR: number;
    static NW_RESIZE_CURSOR: number;
    static N_RESIZE_CURSOR: number;
    static SE_RESIZE_CURSOR: number;
    static SW_RESIZE_CURSOR: number;
    static S_RESIZE_CURSOR: number;
    static TEXT_CURSOR: number;
    static WAIT_CURSOR: number;
    static W_RESIZE_CURSOR: number;
    static getDefaultCursor(): Cursor;
    static getPredefinedCursor(paramarg0: number): Cursor;
    static getSystemCustomCursor(paramarg0: string): Cursor;
    constructor(arg0: number)
    constructor(arg0: string)
    // private anchor: Object;
    // private disposer: Cursor$CursorDisposer;
    name: string;
    // private pData: number;
    type: number;
    getName(): string;
    getType(): number;
    // private setPData(arg0: number): void;
    toString(): string;
}