import type { Point } from '../../../java/awt/Point.d.ts'
import type { TransferHandler$DropLocation } from '../../../javax/swing/TransferHandler$DropLocation.d.ts'
import type { Position$Bias } from '../../../javax/swing/text/Position$Bias.d.ts'
export class JTextComponent$DropLocation extends TransferHandler$DropLocation {
    private constructor(arg0: Point, arg1: number, arg2: Position$Bias)
    readonly bias: Position$Bias;
    readonly index: number;
    getBias(): Position$Bias;
    getIndex(): number;
    toString(): string;
}