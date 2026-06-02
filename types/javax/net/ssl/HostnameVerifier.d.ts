import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HostnameVerifier extends Object{
    verify(arg0: string, arg1: SSLSession): boolean;
}