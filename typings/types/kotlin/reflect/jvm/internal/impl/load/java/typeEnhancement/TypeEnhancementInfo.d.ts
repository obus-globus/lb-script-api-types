import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaTypeQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeQualifiers.d.ts'
export class TypeEnhancementInfo extends Object {
    constructor(arg0: JavaMap<number, JavaTypeQualifiers>)
    readonly map: JavaMap<number, JavaTypeQualifiers>;
    copyForWarnings(): TypeEnhancementInfo;
    getMap(): JavaMap<number, JavaTypeQualifiers>;
}