import type { Bidi } from '../../../../com/ibm/icu/text/Bidi.d.ts'
import type { BidiTransform$Mirroring } from '../../../../com/ibm/icu/text/BidiTransform$Mirroring.d.ts'
import type { BidiTransform$Order } from '../../../../com/ibm/icu/text/BidiTransform$Order.d.ts'
import type { BidiTransform$ReorderingScheme } from '../../../../com/ibm/icu/text/BidiTransform$ReorderingScheme.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BidiTransform extends Object {
    constructor()
    // private bidi: Bidi;
    // private reorderingOptions: number;
    // private shapingOptions: number;
    // private text: string;
    // private findMatchingScheme(arg0: number, arg1: BidiTransform$Order, arg2: number, arg3: BidiTransform$Order): BidiTransform$ReorderingScheme;
    // private mirror(): void;
    // private reorder(): void;
    // private resolve(arg0: number, arg1: number): void;
    // private resolveBaseDirection(arg0: number[]): void;
    // private reverse(): void;
    // private shapeArabic(arg0: number): void;
    // private shapeArabic(arg0: number, arg1: number): void;
    transform(arg0: CharSequence, arg1: number, arg2: BidiTransform$Order, arg3: number, arg4: BidiTransform$Order, arg5: BidiTransform$Mirroring, arg6: number): string;
}