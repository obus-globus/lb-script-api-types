import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class CryptoPrimitive extends Enum<CryptoPrimitive> {
    static BLOCK_CIPHER: CryptoPrimitive;
    static KEY_AGREEMENT: CryptoPrimitive;
    static KEY_ENCAPSULATION: CryptoPrimitive;
    static KEY_WRAP: CryptoPrimitive;
    static MAC: CryptoPrimitive;
    static MESSAGE_DIGEST: CryptoPrimitive;
    static PUBLIC_KEY_ENCRYPTION: CryptoPrimitive;
    static SECURE_RANDOM: CryptoPrimitive;
    static SIGNATURE: CryptoPrimitive;
    static STREAM_CIPHER: CryptoPrimitive;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CryptoPrimitive;
    static values(): CryptoPrimitive[];
    private constructor()
    name(): "MESSAGE_DIGEST" | "SECURE_RANDOM" | "BLOCK_CIPHER" | "STREAM_CIPHER" | "MAC" | "KEY_WRAP" | "PUBLIC_KEY_ENCRYPTION" | "SIGNATURE" | "KEY_ENCAPSULATION" | "KEY_AGREEMENT";
}