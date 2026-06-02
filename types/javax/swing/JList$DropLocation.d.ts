import type { Point } from '../../java/awt/Point.d.ts'
import type { TransferHandler$DropLocation } from '../../javax/swing/TransferHandler$DropLocation.d.ts'
export class JList$DropLocation extends TransferHandler$DropLocation {
    private constructor(arg0: Point, arg1: number, arg2: boolean)
    readonly index: number;
    // private isInsert: boolean;
    getIndex(): number;
    isInsert(): boolean;
    toString(): string;
}