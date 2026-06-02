import type { LongBigListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBigListIterator.d.ts'
import type { LongBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBigListIterators$EmptyBigListIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: LongBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: LongListIterator): LongBigListIterator;
    static singleton(paramarg0: number): LongBigListIterator;
    static unmodifiable(paramarg0: LongBigListIterator): LongBigListIterator;
    private constructor()
}