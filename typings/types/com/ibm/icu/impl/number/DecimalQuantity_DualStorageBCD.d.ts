import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { DecimalQuantity_AbstractBCD } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity_AbstractBCD.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class DecimalQuantity_DualStorageBCD extends DecimalQuantity_AbstractBCD {
    static fromExponentString(paramarg0: string): DecimalQuantity;
    constructor()
    constructor(arg0: DecimalQuantity_DualStorageBCD)
    constructor(arg0: BigDecimal)
    constructor(arg0: BigInteger)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: Number)
    // private bcdBytes: number[];
    // private bcdLong: number;
    readonly usingBytes: boolean;
    bcdToBigDecimal(): BigDecimal;
    checkHealth(): string;
    compact(): void;
    copyBcdFrom(arg0: DecimalQuantity): void;
    createCopy(): DecimalQuantity;
    // private ensureCapacity(): void;
    // private ensureCapacity(arg0: number): void;
    getDigitPos(arg0: number): number;
    isUsingBytes(): boolean;
    maxRepresentableDigits(): number;
    popFromLeft(arg0: number): void;
    readBigIntegerToBcd(arg0: BigInteger): void;
    readIntToBcd(arg0: number): void;
    readLongToBcd(arg0: number): void;
    setBcdToZero(): void;
    setDigitPos(arg0: number, arg1: number): void;
    shiftLeft(arg0: number): void;
    shiftRight(arg0: number): void;
    // private switchStorage(): void;
    // private toNumberString(): string;
    toString(): string;
}