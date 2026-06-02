import type { HostnameVerifier } from '../../../../../../../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSession } from '../../../../../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LaxHostnameVerifier extends Object implements HostnameVerifier {
    static INSTANCE: HostnameVerifier;
    private constructor()
    verify(s: string, sslSession: SSLSession): boolean;
}