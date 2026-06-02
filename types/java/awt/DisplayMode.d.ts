import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class DisplayMode extends Object {
    static BIT_DEPTH_MULTI: number;
    static REFRESH_RATE_UNKNOWN: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly bitDepth: number;
    readonly refreshRate: number;
    // private size: Dimension;
    equals(arg0: DisplayMode): boolean;
    equals(arg0: Object | null): boolean;
    getBitDepth(): number;
    getHeight(): number;
    getRefreshRate(): number;
    getWidth(): number;
    hashCode(): number;
    toString(): string;
}