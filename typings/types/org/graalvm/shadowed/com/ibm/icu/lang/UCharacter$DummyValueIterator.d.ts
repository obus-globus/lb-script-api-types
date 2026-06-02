import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ValueIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ValueIterator.d.ts'
import type { ValueIterator$Element } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ValueIterator$Element.d.ts'
export class UCharacter$DummyValueIterator extends Object implements ValueIterator {
    private constructor()
    next(element: ValueIterator$Element): boolean;
    reset(): void;
    setRange(start: number, limit: number): void;
}