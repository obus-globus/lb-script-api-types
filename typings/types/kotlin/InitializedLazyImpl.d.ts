import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
export class InitializedLazyImpl<T extends unknown> extends Object implements Serializable, Lazy<T> {
    constructor(value: T)
    readonly value: T;
    isInitialized(): boolean;
    toString(): string;
}