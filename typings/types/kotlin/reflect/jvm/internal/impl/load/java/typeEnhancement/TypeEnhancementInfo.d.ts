import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaTypeQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeQualifiers.d.ts'
export class TypeEnhancementInfo extends Object {
    constructor(arg0: { [key: number]: JavaTypeQualifiers })
    readonly map: { [key: number]: JavaTypeQualifiers };
    copyForWarnings(): TypeEnhancementInfo;
    getMap(): { [key: number]: JavaTypeQualifiers };
}