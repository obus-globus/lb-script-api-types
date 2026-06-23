import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { CertificateFactory } from '../../../../java/security/cert/CertificateFactory.d.ts'
export class JcaTemplate$CertificateFactoryFactory extends JcaTemplate$JcaInstanceFactory<CertificateFactory> {
    constructor()
    doGet(arg0: string, arg1: { [key: string]: any }): CertificateFactory;
}