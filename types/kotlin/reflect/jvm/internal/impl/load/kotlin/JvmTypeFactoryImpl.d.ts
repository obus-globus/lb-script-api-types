import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { JvmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType.d.ts'
import type { JvmType$Object } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType$Object.d.ts'
import type { JvmTypeFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmTypeFactory.d.ts'
export class JvmTypeFactoryImpl extends Object implements JvmTypeFactory<JvmType> {
    static INSTANCE: JvmTypeFactoryImpl;
    private constructor()
    boxType(arg0: JvmType): JvmType;
    createFromString(arg0: string): JvmType;
    createObjectType(arg0: string): JvmType$Object;
    createPrimitiveType(arg0: PrimitiveType): JvmType;
    getJavaLangClassType(): JvmType;
    toString(arg0: JvmType): string;
}