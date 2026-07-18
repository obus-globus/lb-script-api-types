import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigMemorySize extends Object {
    static ofBytes(paramarg0: BigInteger): ConfigMemorySize;
    static ofBytes(paramarg0: number): ConfigMemorySize;
    private constructor(arg0: BigInteger)
    // private bytes: BigInteger;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toBytes(): number;
    toBytesBigInteger(): BigInteger;
    toString(): string;
}