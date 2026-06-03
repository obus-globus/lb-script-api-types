import type { AbstractChar2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ReferenceFunctions$Singleton<V extends Object | number | string | boolean> extends AbstractChar2ReferenceFunction<V> implements Serializable, Cloneable {
    constructor(arg0: string, arg1: V)
    // private key: string;
    // private value: V;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    get(arg0: Object): V;
    get(arg0: string): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: string, arg1: V): V;
    size(): number;
}