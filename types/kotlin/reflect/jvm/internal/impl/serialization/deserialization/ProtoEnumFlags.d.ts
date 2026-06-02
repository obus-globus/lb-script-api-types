import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ProtoBuf$Class$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class$Kind.d.ts'
import type { ProtoBuf$Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Modality.d.ts'
import type { ProtoBuf$Type$Argument$Projection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument$Projection.d.ts'
import type { ProtoBuf$TypeParameter$Variance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter$Variance.d.ts'
import type { Variance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export class ProtoEnumFlags extends Object {
    static INSTANCE: ProtoEnumFlags;
    private constructor()
    classKind(arg0: ProtoBuf$Class$Kind): ClassKind;
    modality(arg0: ProtoBuf$Modality): Modality;
    variance(arg0: ProtoBuf$Type$Argument$Projection): Variance;
    variance(arg0: ProtoBuf$TypeParameter$Variance): Variance;
}