import type { DoubleBigListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBigListIterator.d.ts'
import type { DoubleBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBigListIterators$EmptyBigListIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: DoubleBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: DoubleListIterator): DoubleBigListIterator;
    static singleton(paramarg0: number): DoubleBigListIterator;
    static unmodifiable(paramarg0: DoubleBigListIterator): DoubleBigListIterator;
    private constructor()
}