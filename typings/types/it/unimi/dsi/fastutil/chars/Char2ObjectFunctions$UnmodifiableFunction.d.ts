import type { AbstractChar2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ObjectFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectFunctions$UnmodifiableFunction<V extends Object | number | string | boolean> extends AbstractChar2ObjectFunction<V> implements Serializable {
    constructor(arg0: (param0: string) => V)
    // private function: (param0: string) => V;
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