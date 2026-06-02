import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export abstract class Dimension2D extends Object implements Cloneable {
    constructor()
    clone(): Object;
    protected clone(): Object;
    getHeight(): number;
    getWidth(): number;
    setSize(arg0: Dimension2D): void;
    setSize(arg0: number, arg1: number): void;
}