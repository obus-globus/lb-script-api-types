import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { CRL } from '../../../java/security/cert/CRL.d.ts'
import type { CertPath } from '../../../java/security/cert/CertPath.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export abstract class CertificateFactorySpi extends Object {
    constructor()
    engineGenerateCRL(arg0: InputStream): CRL;
    engineGenerateCRLs(arg0: InputStream): CRL[];
    engineGenerateCertPath(arg0: Certificate[]): CertPath;
    engineGenerateCertPath(arg0: InputStream): CertPath;
    engineGenerateCertPath(arg0: InputStream, arg1: string): CertPath;
    engineGenerateCertificate(arg0: InputStream): Certificate;
    engineGenerateCertificates(arg0: InputStream): Certificate[];
    engineGetCertPathEncodings(): Iterator<string>;
}