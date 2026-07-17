import type { JavaMap } from '../../../JavaMap.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { CRL } from '../../../java/security/cert/CRL.d.ts'
import type { CertPath } from '../../../java/security/cert/CertPath.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { CertificateFactorySpi } from '../../../java/security/cert/CertificateFactorySpi.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class CertificateFactory extends Object {
    static getInstance(paramarg0: string): CertificateFactory;
    static getInstance(paramarg0: string, paramarg1: string): CertificateFactory;
    static getInstance(paramarg0: string, paramarg1: JavaMap<any, any>): CertificateFactory;
    constructor(arg0: CertificateFactorySpi, arg1: JavaMap<any, any>, arg2: string)
    // private certFacSpi: CertificateFactorySpi;
    readonly provider: JavaMap<any, any>;
    readonly type: string;
    generateCRL(arg0: InputStream): CRL;
    generateCRLs(arg0: InputStream): CRL[];
    generateCertPath(arg0: Certificate[]): CertPath;
    generateCertPath(arg0: InputStream): CertPath;
    generateCertPath(arg0: InputStream, arg1: string): CertPath;
    generateCertificate(arg0: InputStream): Certificate;
    generateCertificates(arg0: InputStream): Certificate[];
    getCertPathEncodings(): Iterator<string>;
    getProvider(): JavaMap<any, any>;
    getType(): string;
}