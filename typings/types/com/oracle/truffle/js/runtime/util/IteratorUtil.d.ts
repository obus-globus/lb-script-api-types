import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class IteratorUtil extends Object {
    static concatLists<T extends unknown>(paramlist0: T[], paramlist1: T[]): T[];
    static simpleArrayIterator<T extends unknown>(paramarray: T[]): Iterator<T>;
    private constructor()
}