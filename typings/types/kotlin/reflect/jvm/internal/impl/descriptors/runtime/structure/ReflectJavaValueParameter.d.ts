import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { ReflectJavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotation.d.ts'
import type { ReflectJavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaElement.d.ts'
import type { ReflectJavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType.d.ts'
import type { JavaValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaValueParameter.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaValueParameter extends ReflectJavaElement implements JavaValueParameter {
    constructor(arg0: ReflectJavaType, arg1: Annotation[], arg2: string, arg3: boolean)
    // private isVararg: boolean;
    // private reflectAnnotations: Annotation[];
    // private reflectName: string;
    readonly type: ReflectJavaType;
    findAnnotation(arg0: FqName): ReflectJavaAnnotation;
    getAnnotations(): ReflectJavaAnnotation[];
    getName(): Name;
    getType(): ReflectJavaType;
    isDeprecatedInJavaDoc(): boolean;
    isVararg(): boolean;
    toString(): string;
}