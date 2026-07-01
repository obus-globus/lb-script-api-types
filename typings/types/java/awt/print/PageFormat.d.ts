import type { Paper } from '../../../java/awt/print/Paper.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class PageFormat extends Object implements Cloneable {
    static LANDSCAPE: number;
    static PORTRAIT: number;
    static REVERSE_LANDSCAPE: number;
    constructor()
    // private mOrientation: number;
    // private mPaper: Paper;
    clone(): Object;
    getHeight(): number;
    getImageableHeight(): number;
    getImageableWidth(): number;
    getImageableX(): number;
    getImageableY(): number;
    getMatrix(): number[];
    getOrientation(): number;
    getPaper(): Paper;
    getWidth(): number;
    setOrientation(arg0: number): void;
    setPaper(arg0: Paper): void;
}