import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { MessageDigest } from '../../../../java/security/MessageDigest.d.ts'
export class JcaTemplate$MessageDigestFactory extends JcaTemplate$JcaInstanceFactory<MessageDigest> {
    constructor()
    doGet(arg0: string, arg1: JavaMap<any, any>): MessageDigest;
}