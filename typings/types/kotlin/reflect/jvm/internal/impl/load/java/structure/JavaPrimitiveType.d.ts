import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
export interface JavaPrimitiveType extends Object, JavaType{
    getType(): PrimitiveType;
}