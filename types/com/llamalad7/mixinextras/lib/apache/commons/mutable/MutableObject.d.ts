import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MutableObject<T extends Object | number | string | boolean> extends Object implements Serializable {
    constructor()
    readonly value: T;
    equals(arg0: Object | null): boolean;
    getValue(): T;
    hashCode(): number;
    setValue(arg0: T): void;
    toString(): string;
}