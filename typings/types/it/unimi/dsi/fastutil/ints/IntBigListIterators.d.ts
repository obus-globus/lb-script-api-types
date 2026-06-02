import type { IntBigListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBigListIterator.d.ts'
import type { IntBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBigListIterators$EmptyBigListIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: IntBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: IntListIterator): IntBigListIterator;
    static singleton(paramarg0: number): IntBigListIterator;
    static unmodifiable(paramarg0: IntBigListIterator): IntBigListIterator;
    private constructor()
}