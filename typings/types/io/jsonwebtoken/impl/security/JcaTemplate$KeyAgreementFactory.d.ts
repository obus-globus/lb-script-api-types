import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { KeyAgreement } from '../../../../javax/crypto/KeyAgreement.d.ts'
export class JcaTemplate$KeyAgreementFactory extends JcaTemplate$JcaInstanceFactory<KeyAgreement> {
    constructor()
    doGet(arg0: string, arg1: JavaMap<any, any>): KeyAgreement;
}