import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { SecretKeyFactory } from '../../../../javax/crypto/SecretKeyFactory.d.ts'
export class JcaTemplate$SecretKeyFactoryFactory extends JcaTemplate$JcaInstanceFactory<SecretKeyFactory> {
    constructor()
    doGet(arg0: string, arg1: { [key: string]: any }): SecretKeyFactory;
}