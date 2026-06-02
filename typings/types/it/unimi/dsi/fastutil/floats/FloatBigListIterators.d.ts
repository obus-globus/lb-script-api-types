import type { FloatBigListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigListIterator.d.ts'
import type { FloatBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigListIterators$EmptyBigListIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: FloatBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: FloatListIterator): FloatBigListIterator;
    static singleton(paramarg0: number): FloatBigListIterator;
    static unmodifiable(paramarg0: FloatBigListIterator): FloatBigListIterator;
    private constructor()
}