import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PKWareExtraHeader$HashAlgorithm extends Enum<PKWareExtraHeader$HashAlgorithm> {
    static CRC32: PKWareExtraHeader$HashAlgorithm;
    static MD5: PKWareExtraHeader$HashAlgorithm;
    static NONE: PKWareExtraHeader$HashAlgorithm;
    static RIPEND160: PKWareExtraHeader$HashAlgorithm;
    static SHA1: PKWareExtraHeader$HashAlgorithm;
    static SHA256: PKWareExtraHeader$HashAlgorithm;
    static SHA384: PKWareExtraHeader$HashAlgorithm;
    static SHA512: PKWareExtraHeader$HashAlgorithm;
    static getAlgorithmByCode(paramarg0: number): PKWareExtraHeader$HashAlgorithm;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PKWareExtraHeader$HashAlgorithm;
    static values(): PKWareExtraHeader$HashAlgorithm[];
    private constructor(arg2: number)
    readonly code: number;
    getCode(): number;
    name(): "NONE" | "CRC32" | "MD5" | "SHA1" | "RIPEND160" | "SHA256" | "SHA384" | "SHA512";
}