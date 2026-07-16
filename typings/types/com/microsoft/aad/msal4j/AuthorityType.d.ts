import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AuthorityType extends Enum<AuthorityType> {
    static AAD: AuthorityType;
    static ADFS: AuthorityType;
    static B2C: AuthorityType;
    static CIAM: AuthorityType;
    static OIDC: AuthorityType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AuthorityType;
    static values(): AuthorityType[];
    private constructor()
    name(): "AAD" | "ADFS" | "B2C" | "CIAM" | "OIDC";
}