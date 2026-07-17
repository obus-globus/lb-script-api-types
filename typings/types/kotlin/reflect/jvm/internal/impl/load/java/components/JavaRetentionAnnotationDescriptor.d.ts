import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/components/JavaAnnotationDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export class JavaRetentionAnnotationDescriptor extends JavaAnnotationDescriptor {
    constructor(arg0: JavaAnnotation, arg1: LazyJavaResolverContext)
    // private allValueArguments$delegate: NotNullLazyValue<Object>;
    getAllValueArguments(): JavaMap<Name, ConstantValue<Object>>;
}