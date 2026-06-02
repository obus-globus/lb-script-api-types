import type { Class } from '../../java/lang/Class.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class SignatureAlgorithm extends Enum<SignatureAlgorithm> {
    static ES256: SignatureAlgorithm;
    static ES384: SignatureAlgorithm;
    static ES512: SignatureAlgorithm;
    static HS256: SignatureAlgorithm;
    static HS384: SignatureAlgorithm;
    static HS512: SignatureAlgorithm;
    static NONE: SignatureAlgorithm;
    static PS256: SignatureAlgorithm;
    static PS384: SignatureAlgorithm;
    static PS512: SignatureAlgorithm;
    static RS256: SignatureAlgorithm;
    static RS384: SignatureAlgorithm;
    static RS512: SignatureAlgorithm;
    static forName(paramarg0: string): SignatureAlgorithm;
    static forSigningKey(paramarg0: Key): SignatureAlgorithm;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SignatureAlgorithm;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: string, arg4: string, arg5: string, arg6: boolean, arg7: number, arg8: number)
    private constructor(arg2: string, arg3: string, arg4: string, arg5: string, arg6: boolean, arg7: number, arg8: number, arg9: string)
    readonly description: string;
    // private digestLength: number;
    readonly familyName: string;
    readonly jcaName: string;
    readonly jdkStandard: boolean;
    readonly minKeyLength: number;
    // private pkcs12Name: string;
    readonly value: string;
    // private assertValid(arg0: Key, arg1: boolean): void;
    assertValidSigningKey(arg0: Key): void;
    assertValidVerificationKey(arg0: Key): void;
    getDescription(): string;
    getFamilyName(): string;
    getJcaName(): string;
    getMinKeyLength(): number;
    getValue(): string;
    isEllipticCurve(): boolean;
    isHmac(): boolean;
    isJdkStandard(): boolean;
    isRsa(): boolean;
    name(): "NONE" | "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512";
}