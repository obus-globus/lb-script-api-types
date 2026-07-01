import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class CefAcceleratedPaintInfo extends Object implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number)
    format: number;
    height: number;
    width: number;
    clone(): CefAcceleratedPaintInfo;
}