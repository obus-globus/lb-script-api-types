import type { ValueIterator$Element } from '../../../../com/ibm/icu/util/ValueIterator$Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ValueIterator extends Object{
    next(arg0: ValueIterator$Element): boolean;
    reset(): void;
    setRange(arg0: number, arg1: number): void;
}