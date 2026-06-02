import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { KeyFactory } from '../../../../java/security/KeyFactory.d.ts'
export class JcaTemplate$KeyFactoryFactory extends JcaTemplate$JcaInstanceFactory<KeyFactory> {
    constructor()
    doGet(arg0: string, arg1: Provider): KeyFactory;
}