import type { ReferenceBooleanPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceBooleanMutablePair<K extends unknown> extends Object implements ReferenceBooleanPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: boolean): ReferenceBooleanMutablePair<K>;
    static of<K extends unknown>(paramarg0: K, paramarg1: boolean): ReferenceBooleanPair<K>;
    constructor(arg0: K, arg1: boolean)
    // private left: K;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceBooleanMutablePair<K>;
    right(): boolean;
    right(arg0: boolean): ReferenceBooleanPair<K>;
    right(arg0: boolean): ReferenceBooleanMutablePair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ReferenceBooleanPair<K>;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ReferenceBooleanPair<K>;
    valueBoolean(): boolean;
}