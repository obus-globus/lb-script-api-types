import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HmacAlgorithms extends Enum<HmacAlgorithms> {
    static HMAC_MD5: HmacAlgorithms;
    static HMAC_SHA_1: HmacAlgorithms;
    static HMAC_SHA_224: HmacAlgorithms;
    static HMAC_SHA_256: HmacAlgorithms;
    static HMAC_SHA_384: HmacAlgorithms;
    static HMAC_SHA_512: HmacAlgorithms;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HmacAlgorithms;
    static values(): HmacAlgorithms[];
    private constructor(arg2: string)
    getName(): string;
    toString(): string;
    name(): "HMAC_MD5" | "HMAC_SHA_1" | "HMAC_SHA_224" | "HMAC_SHA_256" | "HMAC_SHA_384" | "HMAC_SHA_512";
}