import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class LazilyParsedNumber extends Number {
    constructor(arg0: string)
    // private value: string;
    // private asBigDecimal(): BigDecimal;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    // private writeReplace(): Object;
}