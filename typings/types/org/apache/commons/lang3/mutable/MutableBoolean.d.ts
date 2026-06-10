import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Mutable } from '../../../../../org/apache/commons/lang3/mutable/Mutable.d.ts'
export class MutableBoolean extends Object implements Serializable, Comparable<MutableBoolean>, Mutable<boolean> {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean)
    readonly value: boolean;
    booleanValue(): boolean;
    compareTo(arg0: MutableBoolean): number;
    equals(arg0: Object | null): boolean;
    get(): boolean;
    getValue(): boolean;
    hashCode(): number;
    isFalse(): boolean;
    isTrue(): boolean;
    setFalse(): void;
    setTrue(): void;
    setValue(arg0: boolean): void;
    toBoolean(): boolean;
    toString(): string;
}