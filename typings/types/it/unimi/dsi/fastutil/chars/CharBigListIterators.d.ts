import type { CharBigListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBigListIterator.d.ts'
import type { CharBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBigListIterators$EmptyBigListIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: CharBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: CharListIterator): CharBigListIterator;
    static singleton(paramarg0: string): CharBigListIterator;
    static unmodifiable(paramarg0: CharBigListIterator): CharBigListIterator;
    private constructor()
}