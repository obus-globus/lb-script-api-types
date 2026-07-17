import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JcaTemplate$JcaInstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$JcaInstanceFactory.d.ts'
import type { AlgorithmParameters } from '../../../../java/security/AlgorithmParameters.d.ts'
export class JcaTemplate$AlgorithmParametersFactory extends JcaTemplate$JcaInstanceFactory<AlgorithmParameters> {
    constructor()
    doGet(arg0: string, arg1: JavaMap<any, any>): AlgorithmParameters;
}