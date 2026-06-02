import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
export interface JavaArrayType extends Object, JavaType{
    getComponentType(): JavaType;
}