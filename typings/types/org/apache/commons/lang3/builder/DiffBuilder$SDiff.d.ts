import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Diff } from '../../../../../org/apache/commons/lang3/builder/Diff.d.ts'
import type { DiffBuilder$SerializableSupplier } from '../../../../../org/apache/commons/lang3/builder/DiffBuilder$SerializableSupplier.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class DiffBuilder$SDiff<T extends unknown> extends Diff<T> {
    static EMPTY_ARRAY: Pair<Object, Object>[];
    static emptyArray<L extends unknown, R extends unknown>(): Pair<L, R>[];
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): Pair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    private constructor(arg0: string, arg1: DiffBuilder$SerializableSupplier<T>, arg2: DiffBuilder$SerializableSupplier<T>, arg3: Class<T>)
    // private leftSupplier: DiffBuilder$SerializableSupplier<T>;
    // private rightSupplier: DiffBuilder$SerializableSupplier<T>;
    getLeft(): T;
    getRight(): T;
}