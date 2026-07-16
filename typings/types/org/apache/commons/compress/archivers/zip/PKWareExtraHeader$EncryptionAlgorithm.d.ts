import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PKWareExtraHeader$EncryptionAlgorithm extends Enum<PKWareExtraHeader$EncryptionAlgorithm> {
    static AES128: PKWareExtraHeader$EncryptionAlgorithm;
    static AES192: PKWareExtraHeader$EncryptionAlgorithm;
    static AES256: PKWareExtraHeader$EncryptionAlgorithm;
    static DES: PKWareExtraHeader$EncryptionAlgorithm;
    static RC2: PKWareExtraHeader$EncryptionAlgorithm;
    static RC2pre52: PKWareExtraHeader$EncryptionAlgorithm;
    static RC4: PKWareExtraHeader$EncryptionAlgorithm;
    static TripleDES168: PKWareExtraHeader$EncryptionAlgorithm;
    static TripleDES192: PKWareExtraHeader$EncryptionAlgorithm;
    static UNKNOWN: PKWareExtraHeader$EncryptionAlgorithm;
    static getAlgorithmByCode(paramarg0: number): PKWareExtraHeader$EncryptionAlgorithm;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PKWareExtraHeader$EncryptionAlgorithm;
    static values(): PKWareExtraHeader$EncryptionAlgorithm[];
    private constructor(arg2: number)
    readonly code: number;
    getCode(): number;
    name(): "DES" | "RC2pre52" | "TripleDES168" | "TripleDES192" | "AES128" | "AES192" | "AES256" | "RC2" | "RC4" | "UNKNOWN";
}