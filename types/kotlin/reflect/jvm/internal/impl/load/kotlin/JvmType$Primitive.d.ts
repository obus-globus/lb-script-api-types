import type { JvmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType.d.ts'
import type { JvmType$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType$Companion.d.ts'
import type { JvmPrimitiveType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/jvm/JvmPrimitiveType.d.ts'
export class JvmType$Primitive extends JvmType {
    static Companion: JvmType$Companion;
    constructor(arg0: JvmPrimitiveType)
    readonly jvmPrimitiveType: JvmPrimitiveType;
    getJvmPrimitiveType(): JvmPrimitiveType;
}