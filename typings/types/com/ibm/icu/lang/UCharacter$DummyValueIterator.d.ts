import type { ValueIterator } from '../../../../com/ibm/icu/util/ValueIterator.d.ts'
import type { ValueIterator$Element } from '../../../../com/ibm/icu/util/ValueIterator$Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UCharacter$DummyValueIterator extends Object implements ValueIterator {
    private constructor()
    next(arg0: ValueIterator$Element): boolean;
    reset(): void;
    setRange(arg0: number, arg1: number): void;
}