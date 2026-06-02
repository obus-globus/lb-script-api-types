import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export class PossiblyInnerType extends Object {
    constructor(arg0: ClassifierDescriptorWithTypeParameters, arg1: TypeProjection[], arg2: PossiblyInnerType)
    readonly arguments: TypeProjection[];
    readonly classifierDescriptor: ClassifierDescriptorWithTypeParameters;
    readonly outerType: PossiblyInnerType;
    getArguments(): TypeProjection[];
    getClassifierDescriptor(): ClassifierDescriptorWithTypeParameters;
    getOuterType(): PossiblyInnerType;
}