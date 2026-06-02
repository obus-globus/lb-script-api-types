import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { HostnameVerifier } from '../../../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class OkHostnameVerifier extends Object implements HostnameVerifier {
    static INSTANCE: OkHostnameVerifier;
    // private ALT_DNS_NAME: number;
    // private ALT_IPA_NAME: number;
    allSubjectAltNames(certificate: X509Certificate): string[];
    // private getSubjectAltNames(certificate: X509Certificate, type: number): string[];
    verify(host: string, certificate: X509Certificate): boolean;
    verify(host: string, session: SSLSession): boolean;
    // private verifyHostname(hostname: string, certificate: X509Certificate): boolean;
    // private verifyHostname(hostname: string | null, pattern: string | null): boolean;
    // private verifyIpAddress(ipAddress: string, certificate: X509Certificate): boolean;
}