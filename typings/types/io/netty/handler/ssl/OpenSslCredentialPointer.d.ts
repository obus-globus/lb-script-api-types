import type { OpenSslCredential } from '../../../../io/netty/handler/ssl/OpenSslCredential.d.ts'
import type { OpenSslCredential$CredentialType } from '../../../../io/netty/handler/ssl/OpenSslCredential$CredentialType.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslCredentialPointer extends OpenSslCredential, Object{
    credentialAddress(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): OpenSslCredential;
    retain(arg0: number): OpenSslCredential;
    retain(): ReferenceCounted;
    retain(arg0: number): ReferenceCounted;
    touch(): OpenSslCredential;
    touch(arg0: Object): OpenSslCredential;
    touch(): ReferenceCounted;
    touch(arg0: Object): ReferenceCounted;
    type(): OpenSslCredential$CredentialType;
}