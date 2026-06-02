import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
export class LazyJavaScope$ResolvedValueParameters extends Object {
    constructor(arg0: ValueParameterDescriptor[], arg1: boolean)
    readonly descriptors: ValueParameterDescriptor[];
    readonly hasSynthesizedNames: boolean;
    getDescriptors(): ValueParameterDescriptor[];
    getHasSynthesizedNames(): boolean;
}