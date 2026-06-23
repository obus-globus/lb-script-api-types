import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { KeyGenerator } from '../../../../javax/crypto/KeyGenerator.d.ts'
export class JcaTemplate$KeyGeneratorFactory extends JcaTemplate$JcaInstanceFactory<KeyGenerator> {
    constructor()
    doGet(arg0: string, arg1: { [key: string]: any }): KeyGenerator;
}