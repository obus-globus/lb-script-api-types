import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Bidi } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Bidi.d.ts'
import type { BidiTransform$Mirroring } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BidiTransform$Mirroring.d.ts'
import type { BidiTransform$Order } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BidiTransform$Order.d.ts'
import type { BidiTransform$ReorderingScheme } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BidiTransform$ReorderingScheme.d.ts'
export class BidiTransform extends Object {
    constructor()
    // private bidi: Bidi;
    // private reorderingOptions: number;
    // private shapingOptions: number;
    // private text: string;
    // private findMatchingScheme(inLevel: number, inOrder: BidiTransform$Order, outLevel: number, outOrder: BidiTransform$Order): BidiTransform$ReorderingScheme;
    // private mirror(): void;
    // private reorder(): void;
    // private resolve(level: number, options: number): void;
    // private resolveBaseDirection(levels: number[]): void;
    // private reverse(): void;
    // private shapeArabic(options: number): void;
    // private shapeArabic(digitsDir: number, lettersDir: number): void;
    transform(text: CharSequence, inParaLevel: number, inOrder: BidiTransform$Order, outParaLevel: number, outOrder: BidiTransform$Order, doMirroring: BidiTransform$Mirroring, shapingOptions: number): string;
}