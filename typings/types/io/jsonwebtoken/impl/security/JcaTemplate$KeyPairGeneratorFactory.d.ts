import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { KeyPairGenerator } from '../../../../java/security/KeyPairGenerator.d.ts'
export class JcaTemplate$KeyPairGeneratorFactory extends JcaTemplate$JcaInstanceFactory<KeyPairGenerator> {
    constructor()
    doGet(arg0: string, arg1: { [key: string]: any }): KeyPairGenerator;
}