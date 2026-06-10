import type { ClassCastException } from '../../../java/lang/ClassCastException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../java/util/ListIterator.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class TypeIntrinsics extends Object {
    static asMutableCollection(paramarg0: Object): (Object | null)[];
    static asMutableCollection(paramarg0: Object, paramarg1: string): (Object | null)[];
    static asMutableIterable(paramarg0: Object): (Object | null)[];
    static asMutableIterable(paramarg0: Object, paramarg1: string): (Object | null)[];
    static asMutableIterator(paramarg0: Object): Iterator<Object>;
    static asMutableIterator(paramarg0: Object, paramarg1: string): Iterator<Object>;
    static asMutableList(paramarg0: Object): (Object | null)[];
    static asMutableList(paramarg0: Object, paramarg1: string): (Object | null)[];
    static asMutableListIterator(paramarg0: Object): ListIterator<Object>;
    static asMutableListIterator(paramarg0: Object, paramarg1: string): ListIterator<Object>;
    static asMutableMap(paramarg0: Object): Map<Object | null, Object | null>;
    static asMutableMap(paramarg0: Object, paramarg1: string): Map<Object | null, Object | null>;
    static asMutableMapEntry(paramarg0: Object): Map$Entry<Object, Object>;
    static asMutableMapEntry(paramarg0: Object, paramarg1: string): Map$Entry<Object, Object>;
    static asMutableSet(paramarg0: Object): (Object | null)[];
    static asMutableSet(paramarg0: Object, paramarg1: string): (Object | null)[];
    static beforeCheckcastToFunctionOfArity(paramarg0: Object, paramarg1: number): Object;
    static beforeCheckcastToFunctionOfArity(paramarg0: Object, paramarg1: number, paramarg2: string): Object;
    static castToCollection(paramarg0: Object): (Object | null)[];
    static castToIterable(paramarg0: Object): (Object | null)[];
    static castToIterator(paramarg0: Object): Iterator<Object>;
    static castToList(paramarg0: Object): (Object | null)[];
    static castToListIterator(paramarg0: Object): ListIterator<Object>;
    static castToMap(paramarg0: Object): Map<Object | null, Object | null>;
    static castToMapEntry(paramarg0: Object): Map$Entry<Object, Object>;
    static castToSet(paramarg0: Object): (Object | null)[];
    static getFunctionArity(paramarg0: Object): number;
    static isFunctionOfArity(paramarg0: Object, paramarg1: number): boolean;
    static isMutableCollection(paramarg0: Object): boolean;
    static isMutableIterable(paramarg0: Object): boolean;
    static isMutableIterator(paramarg0: Object): boolean;
    static isMutableList(paramarg0: Object): boolean;
    static isMutableListIterator(paramarg0: Object): boolean;
    static isMutableMap(paramarg0: Object): boolean;
    static isMutableMapEntry(paramarg0: Object): boolean;
    static isMutableSet(paramarg0: Object): boolean;
    static throwCce(paramarg0: ClassCastException): ClassCastException;
    static throwCce(paramarg0: Object, paramarg1: string): void;
    static throwCce(paramarg0: string): void;
    constructor()
}