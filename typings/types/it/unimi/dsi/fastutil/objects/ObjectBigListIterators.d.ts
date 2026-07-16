import type { ObjectBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterator.d.ts'
import type { ObjectBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterators$EmptyBigListIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: ObjectBigListIterators$EmptyBigListIterator<Object>;
    static asBigListIterator<K extends unknown>(paramarg0: ObjectListIterator<K>): ObjectBigListIterator<K>;
    static singleton<K extends unknown>(paramarg0: K): ObjectBigListIterator<K>;
    static unmodifiable<K extends unknown>(paramarg0: ObjectBigListIterator<K>): ObjectBigListIterator<K>;
    private constructor()
}