import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { StaticShape } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape.d.ts'
import type { StaticShape$Builder } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape$Builder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PodBasedStaticShape<T extends unknown> extends StaticShape<T> {
    static newBuilder(paramlanguage: TruffleLanguage<Object>): StaticShape$Builder;
    private constructor(storageClass: Class<Object>, safetyChecks: boolean, pod: Object)
    // private pod: Object;
    getStorage(obj: Object, primitive: boolean): Object;
}