import type { CodePointMap$Range } from '../../../../com/ibm/icu/util/CodePointMap$Range.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CodePointMap$RangeIterator extends Object implements Iterator<CodePointMap$Range> {
    private constructor(null_: CodePointMap$RangeIterator)
    // private range: CodePointMap$Range;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): CodePointMap$Range;
    remove(): void;
}