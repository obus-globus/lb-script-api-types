import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { Signature } from '../../../../java/security/Signature.d.ts'
export class JcaTemplate$SignatureFactory extends JcaTemplate$JcaInstanceFactory<Signature> {
    constructor()
    doGet(arg0: string, arg1: JavaMap<any, any>): Signature;
}