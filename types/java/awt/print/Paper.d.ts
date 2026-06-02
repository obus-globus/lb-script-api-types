import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class Paper extends Object implements Cloneable {
    constructor()
    // private mHeight: number;
    // private mImageableArea: Rectangle2D;
    // private mWidth: number;
    clone(): Object;
    protected clone(): Object;
    getHeight(): number;
    getImageableHeight(): number;
    getImageableWidth(): number;
    getImageableX(): number;
    getImageableY(): number;
    getWidth(): number;
    setImageableArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setSize(arg0: number, arg1: number): void;
}