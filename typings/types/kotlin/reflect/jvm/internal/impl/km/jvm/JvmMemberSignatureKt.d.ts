import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmFieldSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmFieldSignature.d.ts'
import type { JvmMethodSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMethodSignature.d.ts'
import type { JvmMemberSignature$Field } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMemberSignature$Field.d.ts'
import type { JvmMemberSignature$Method } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMemberSignature$Method.d.ts'
export class JvmMemberSignatureKt extends Object {
    static wrapAsPublic(paramarg0: JvmMemberSignature$Field): JvmFieldSignature;
    static wrapAsPublic(paramarg0: JvmMemberSignature$Method): JvmMethodSignature;
}