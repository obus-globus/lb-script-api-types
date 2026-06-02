import type { ObjectInputStream } from '../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Function0 } from '../kotlin/jvm/functions/Function0.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
export class UnsafeLazyImpl<T extends Object | number | string | boolean> extends Object implements Serializable, Lazy<T> {
    constructor(initializer: Function0<T>)
    // private _value: Object | null;
    // private initializer: () => T;
    readonly value: T;
    isInitialized(): boolean;
    // private readObject(input: ObjectInputStream): void;
    toString(): string;
    // private writeReplace(): Object;
}