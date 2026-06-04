import type { AbstractChar2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ReferenceFunction.d.ts'
import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceFunctions$UnmodifiableFunction<V extends Object | number | string | boolean> extends AbstractChar2ReferenceFunction<V> implements Serializable {
    constructor(arg0: (param0: V) => unknown)
    // private function: (param0: V) => unknown;
    clear(): void;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): V;
    get(arg0: string): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: string, arg1: V): V;
    hashCode(): number;
    put(arg0: string, arg1: V): V;
    remove(arg0: Object): V;
    remove(arg0: string): V;
    size(): number;
    toString(): string;
}