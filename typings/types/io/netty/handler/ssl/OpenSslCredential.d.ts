import type { OpenSslCredential$CredentialType } from '../../../../io/netty/handler/ssl/OpenSslCredential$CredentialType.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslCredential extends ReferenceCounted, Object{
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): OpenSslCredential;
    retain(arg0: number): OpenSslCredential;
    touch(): OpenSslCredential;
    touch(arg0: Object): OpenSslCredential;
    type(): OpenSslCredential$CredentialType;
}