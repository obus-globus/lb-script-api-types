import type { ObjectInputStream } from '../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
export class UnsafeLazyImpl<T extends Object | number | string | boolean> extends Object implements Serializable, Lazy<T> {
    constructor(initializer: () => T)
    // private _value: Object | null;
    // private initializer: (() => T) | null;
    readonly value: T;
    isInitialized(): boolean;
    // private readObject(input: ObjectInputStream): void;
    toString(): string;
    // private writeReplace(): Object;
}