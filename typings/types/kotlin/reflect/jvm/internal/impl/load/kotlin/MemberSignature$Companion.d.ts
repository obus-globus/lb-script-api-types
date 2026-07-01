import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { MemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { JvmProtoBuf$JvmMethodSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignature.d.ts'
import type { JvmMemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMemberSignature.d.ts'
export class MemberSignature$Companion extends Object {
    constructor(arg0: DefaultConstructorMarker)
    fromFieldNameAndDesc(arg0: string, arg1: string): MemberSignature;
    fromJvmMemberSignature(arg0: JvmMemberSignature): MemberSignature;
    fromMethod(arg0: NameResolver, arg1: JvmProtoBuf$JvmMethodSignature): MemberSignature;
    fromMethodNameAndDesc(arg0: string, arg1: string): MemberSignature;
    fromMethodSignatureAndParameterIndex(arg0: MemberSignature, arg1: number): MemberSignature;
}