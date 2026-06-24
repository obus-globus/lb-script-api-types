import type { OpenSslCredential } from '../../../../io/netty/handler/ssl/OpenSslCredential.d.ts'
import type { OpenSslCredential$CredentialType } from '../../../../io/netty/handler/ssl/OpenSslCredential$CredentialType.d.ts'
import type { OpenSslCredentialPointer } from '../../../../io/netty/handler/ssl/OpenSslCredentialPointer.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NonOwnedOpenSslCredential extends AbstractReferenceCounted implements OpenSslCredentialPointer {
    constructor(arg0: number, arg1: OpenSslCredential$CredentialType)
    // private credential: number;
    // private released: boolean;
    // private type: OpenSslCredential$CredentialType;
    credentialAddress(): number;
    deallocate(): void;
    retain(): OpenSslCredential;
    retain(arg0: number): OpenSslCredential;
    touch(): OpenSslCredential;
    touch(arg0: Object): OpenSslCredential;
    type(): OpenSslCredential$CredentialType;
}