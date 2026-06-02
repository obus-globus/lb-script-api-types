import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractTypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeParameterDescriptor.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { Variance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export abstract class AbstractLazyTypeParameterDescriptor extends AbstractTypeParameterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: StorageManager, arg1: DeclarationDescriptor, arg2: AnnotationDescriptor[], arg3: Name, arg4: Variance, arg5: boolean, arg6: number, arg7: SourceElement, arg8: SupertypeLoopChecker)
    toString(): string;
}