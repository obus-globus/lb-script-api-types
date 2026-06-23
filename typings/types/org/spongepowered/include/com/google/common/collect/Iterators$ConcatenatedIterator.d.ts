import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { MultitransformedIterator } from '../../../../../../../org/spongepowered/include/com/google/common/collect/MultitransformedIterator.d.ts'
export class Iterators$ConcatenatedIterator<T extends unknown> extends MultitransformedIterator<Iterator<T>, T> {
    constructor(arg0: Iterator<Iterator<T>>)
    transform(arg0: Iterator<T>): Iterator<T>;
}