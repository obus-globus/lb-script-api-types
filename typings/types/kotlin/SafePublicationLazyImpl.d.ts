import type { ObjectInputStream } from '../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
import type { SafePublicationLazyImpl$Companion } from '../kotlin/SafePublicationLazyImpl$Companion.d.ts'
export class SafePublicationLazyImpl<T extends unknown> extends Object implements Serializable, Lazy<T> {
    static Companion: SafePublicationLazyImpl$Companion;
    constructor(initializer: () => T)
    // private _value: Object | null;
    // private final: Object;
    // private initializer: (() => T) | null;
    readonly value: T;
    isInitialized(): boolean;
    // private readObject(input: ObjectInputStream): void;
    toString(): string;
    // private writeReplace(): Object;
}