import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaValueParameter extends Object, JavaAnnotationOwner{
    getName(): Name;
    getType(): JavaType;
    isVararg(): boolean;
}