import type { JvmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType.d.ts'
import type { JvmType$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType$Companion.d.ts'
export class JvmType$Array extends JvmType {
    static Companion: JvmType$Companion;
    constructor(arg0: JvmType)
    readonly elementType: JvmType;
    getElementType(): JvmType;
}