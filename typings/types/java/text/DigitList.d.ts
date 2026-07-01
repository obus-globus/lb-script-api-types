import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../java/math/RoundingMode.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class DigitList extends Object implements Cloneable {
    static MAX_COUNT: number;
    constructor()
    count: number;
    // private data: string[];
    decimalAt: number;
    digits: string[];
    // private isNegative: boolean;
    // private roundingMode: RoundingMode;
    // private tempBuilder: StringBuilder;
    append(arg0: string): void;
    clear(): void;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    // private extendDigits(arg0: number): void;
    fitsIntoLong(arg0: boolean, arg1: boolean): boolean;
    getBigDecimal(): BigDecimal;
    // private getDataChars(arg0: number): string[];
    getDouble(): number;
    getLong(): number;
    // private getStringBuilder(): StringBuilder;
    hashCode(): number;
    // private isLongMIN_VALUE(): boolean;
    isZero(): boolean;
    // private nonZeroAfterIndex(arg0: number): boolean;
    // private round(arg0: number, arg1: boolean, arg2: boolean): void;
    // private roundInt(arg0: number): void;
    // private roundUp(arg0: number): number;
    set(arg0: boolean, arg1: BigDecimal, arg2: number, arg3: boolean): void;
    set(arg0: boolean, arg1: BigInteger, arg2: number): void;
    set(arg0: boolean, arg1: number, arg2: number): void;
    set(arg0: boolean, arg1: number, arg2: number, arg3: boolean): void;
    set(arg0: boolean, arg1: number): void;
    // private set(arg0: boolean, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: boolean): void;
    setRoundingMode(arg0: RoundingMode): void;
    // private shouldRoundUp(arg0: number, arg1: boolean, arg2: boolean): boolean;
    toString(): string;
}