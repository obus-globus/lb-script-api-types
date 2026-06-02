import type { ObjectBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterator.d.ts'
import type { ObjectBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterators$EmptyBigListIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: ObjectBigListIterators$EmptyBigListIterator<Object>;
    static asBigListIterator(paramarg0: ObjectListIterator<Object>): ObjectBigListIterator<Object>;
    static singleton(paramarg0: Object | null): ObjectBigListIterator<Object>;
    static unmodifiable(paramarg0: ObjectBigListIterator<Object>): ObjectBigListIterator<Object>;
    private constructor()
}