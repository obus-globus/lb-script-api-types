import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export abstract class Diff<T extends unknown> extends Pair<T, T> {
    static EMPTY_ARRAY: Pair<Object, Object>[];
    static emptyArray<L extends unknown, R extends unknown>(): Pair<L, R>[];
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): Pair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    constructor(arg0: string)
    constructor(arg0: string, arg1: Type)
    readonly fieldName: string;
    readonly type: Type;
    getFieldName(): string;
    getType(): Type;
    setValue(arg0: T): T;
    toString(): string;
    toString(arg0: string): string;
}