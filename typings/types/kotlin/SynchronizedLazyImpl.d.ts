import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
export class SynchronizedLazyImpl<T extends unknown> extends Object implements Serializable, Lazy<T> {
    constructor(initializer: () => T, lock: Object | null)
    // private _value: Object | null;
    // private initializer: (() => T) | null;
    // private lock: Object;
    readonly value: T;
    isInitialized(): boolean;
    toString(): string;
    // private writeReplace(): Object;
}