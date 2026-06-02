import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class AnnotationDescriptorImpl extends Object implements AnnotationDescriptor {
    constructor(arg0: KotlinType, arg1: Map<Name, ConstantValue<Object>>, arg2: SourceElement)
    // private annotationType: KotlinType;
    readonly source: SourceElement;
    // private valueArguments: Map<Name, ConstantValue<Object>>;
    getAllValueArguments(): Map<Name, ConstantValue<Object>>;
    getFqName(): FqName;
    getSource(): SourceElement;
    getType(): KotlinType;
    toString(): string;
}