import type { Point } from '../../java/awt/Point.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TransferHandler$DropLocation extends Object {
    constructor(arg0: Point)
    readonly dropPoint: Point;
    getDropPoint(): Point;
    toString(): string;
}