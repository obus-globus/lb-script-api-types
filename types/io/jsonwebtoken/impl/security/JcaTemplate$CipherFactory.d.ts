import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { Cipher } from '../../../../javax/crypto/Cipher.d.ts'
export class JcaTemplate$CipherFactory extends JcaTemplate$JcaInstanceFactory<Cipher> {
    constructor()
    doGet(arg0: string, arg1: Provider): Cipher;
}