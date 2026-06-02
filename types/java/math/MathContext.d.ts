import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { RoundingMode } from '../../java/math/RoundingMode.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MathContext extends Object implements Serializable {
    static DECIMAL128: MathContext;
    static DECIMAL32: MathContext;
    static DECIMAL64: MathContext;
    static UNLIMITED: MathContext;
    constructor(arg0: number)
    constructor(arg0: number, arg1: RoundingMode)
    constructor(arg0: string)
    readonly precision: number;
    readonly roundingMode: RoundingMode;
    equals(arg0: Object | null): boolean;
    getPrecision(): number;
    getRoundingMode(): RoundingMode;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
}