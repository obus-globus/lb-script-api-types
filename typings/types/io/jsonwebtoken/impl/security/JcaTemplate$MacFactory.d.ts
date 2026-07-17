import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { Mac } from '../../../../javax/crypto/Mac.d.ts'
export class JcaTemplate$MacFactory extends JcaTemplate$JcaInstanceFactory<Mac> {
    constructor()
    doGet(arg0: string, arg1: JavaMap<any, any>): Mac;
}