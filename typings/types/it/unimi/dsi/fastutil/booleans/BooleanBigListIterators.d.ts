import type { BooleanBigListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBigListIterator.d.ts'
import type { BooleanBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBigListIterators$EmptyBigListIterator.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: BooleanBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: BooleanListIterator): BooleanBigListIterator;
    static singleton(paramarg0: boolean): BooleanBigListIterator;
    static unmodifiable(paramarg0: BooleanBigListIterator): BooleanBigListIterator;
    private constructor()
}