import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { PossiblyExternalAnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/PossiblyExternalAnnotationDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class JavaAnnotationDescriptor extends Object implements PossiblyExternalAnnotationDescriptor {
    constructor(arg0: LazyJavaResolverContext, arg1: JavaAnnotation, arg2: FqName)
    // private firstArgument: JavaAnnotationArgument;
    readonly fqName: FqName;
    // private isIdeExternalAnnotation: boolean;
    readonly source: SourceElement;
    // private type$delegate: NotNullLazyValue<Object>;
    getAllValueArguments(): JavaMap<Name, ConstantValue<Object>>;
    getFirstArgument(): JavaAnnotationArgument;
    getFqName(): FqName;
    getSource(): SourceElement;
    getType(): SimpleType;
    isIdeExternalAnnotation(): boolean;
}