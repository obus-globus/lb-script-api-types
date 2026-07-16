import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OpenSslCredential$CredentialType extends Enum<OpenSslCredential$CredentialType> {
    static DELEGATED: OpenSslCredential$CredentialType;
    static X509: OpenSslCredential$CredentialType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OpenSslCredential$CredentialType;
    static values(): OpenSslCredential$CredentialType[];
    private constructor()
    name(): "X509" | "DELEGATED";
}