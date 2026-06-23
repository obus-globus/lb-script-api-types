import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Mutable } from '../../../../../org/apache/commons/lang3/mutable/Mutable.d.ts'
export class MutableObject<T extends unknown> extends Object implements Serializable, Mutable<T> {
    constructor()
    constructor(arg0: T)
    readonly value: T;
    equals(arg0: Object | null): boolean;
    get(): T;
    getValue(): T;
    hashCode(): number;
    setValue(arg0: T): void;
    toString(): string;
}