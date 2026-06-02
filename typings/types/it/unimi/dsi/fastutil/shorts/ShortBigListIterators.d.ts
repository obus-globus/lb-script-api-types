import type { ShortBigListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBigListIterator.d.ts'
import type { ShortBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBigListIterators$EmptyBigListIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: ShortBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: ShortListIterator): ShortBigListIterator;
    static singleton(paramarg0: number): ShortBigListIterator;
    static unmodifiable(paramarg0: ShortBigListIterator): ShortBigListIterator;
    private constructor()
}