import type { OpenSslCredential$CredentialType } from '../../../../io/netty/handler/ssl/OpenSslCredential$CredentialType.d.ts'
import type { OpenSslCredentialPointer } from '../../../../io/netty/handler/ssl/OpenSslCredentialPointer.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ResourceLeakTracker } from '../../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultOpenSslCredential extends AbstractReferenceCounted implements OpenSslCredentialPointer {
    constructor(arg0: number, arg1: OpenSslCredential$CredentialType)
    // private credential: number;
    // private leak: ResourceLeakTracker<DefaultOpenSslCredential>;
    // private type: OpenSslCredential$CredentialType;
    credentialAddress(): number;
    deallocate(): void;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): DefaultOpenSslCredential;
    retain(arg0: number): DefaultOpenSslCredential;
    touch(): DefaultOpenSslCredential;
    touch(arg0: Object): DefaultOpenSslCredential;
    type(): OpenSslCredential$CredentialType;
}