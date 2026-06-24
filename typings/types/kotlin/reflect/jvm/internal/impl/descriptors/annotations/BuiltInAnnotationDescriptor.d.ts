import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../kotlin/Lazy.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class BuiltInAnnotationDescriptor extends Object implements AnnotationDescriptor {
    constructor(arg0: KotlinBuiltIns, arg1: FqName, arg2: Map<Name, ConstantValue<Object>>, arg3: boolean)
    constructor(arg0: KotlinBuiltIns, arg1: FqName, arg2: Map<Object | null, Object | null>, arg3: boolean, arg4: number, arg5: DefaultConstructorMarker)
    readonly allValueArguments: Map<Name, ConstantValue<Object>>;
    // private builtIns: KotlinBuiltIns;
    // private forcePropagationDeprecationToOverrides: boolean;
    readonly fqName: FqName;
    // private type$delegate: Lazy<Object>;
    getAllValueArguments(): Map<Name, ConstantValue<Object>>;
    getFqName(): FqName;
    getSource(): SourceElement;
    getType(): KotlinType;
}