import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Number } from '../../../../../../../../java/lang/Number.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { DecimalQuantity_AbstractBCD } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity_AbstractBCD.d.ts'
export class DecimalQuantity_DualStorageBCD extends DecimalQuantity_AbstractBCD {
    static fromExponentString(paramnum: string): DecimalQuantity;
    constructor()
    constructor(input: BigDecimal)
    constructor(input: BigInteger)
    constructor(input: number)
    constructor(input: number)
    constructor(input: number)
    constructor(number: Number)
    constructor(other: DecimalQuantity_DualStorageBCD)
    // private bcdBytes: number[];
    // private bcdLong: number;
    readonly usingBytes: boolean;
    bcdToBigDecimal(): BigDecimal;
    checkHealth(): string;
    compact(): void;
    copyBcdFrom(_other: DecimalQuantity): void;
    createCopy(): DecimalQuantity;
    // private ensureCapacity(): void;
    // private ensureCapacity(capacity: number): void;
    getDigitPos(position: number): number;
    isUsingBytes(): boolean;
    maxRepresentableDigits(): number;
    popFromLeft(numDigits: number): void;
    readBigIntegerToBcd(n: BigInteger): void;
    readIntToBcd(n: number): void;
    readLongToBcd(n: number): void;
    setBcdToZero(): void;
    setDigitPos(position: number, value: number): void;
    shiftLeft(numDigits: number): void;
    shiftRight(numDigits: number): void;
    // private switchStorage(): void;
    // private toNumberString(): string;
    toString(): string;
}