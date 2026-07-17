import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class AnnotationDeserializer extends Object {
    constructor(arg0: ModuleDescriptor, arg1: NotFoundClasses)
    // private module: ModuleDescriptor;
    // private notFoundClasses: NotFoundClasses;
    deserializeAnnotation(arg0: ProtoBuf$Annotation, arg1: NameResolver): AnnotationDescriptor;
    // private doesValueConformToExpectedType(arg0: ConstantValue<Object>, arg1: KotlinType, arg2: ProtoBuf$Annotation$Argument$Value): boolean;
    // private getBuiltIns(): KotlinBuiltIns;
    // private resolveArgument(arg0: ProtoBuf$Annotation$Argument, arg1: JavaMap<Name, ValueParameterDescriptor>, arg2: NameResolver): Pair<Name, ConstantValue<Object>>;
    // private resolveClass(arg0: ClassId): ClassDescriptor;
    resolveValue(arg0: KotlinType, arg1: ProtoBuf$Annotation$Argument$Value, arg2: NameResolver): ConstantValue<Object>;
    // private resolveValueAndCheckExpectedType(arg0: KotlinType, arg1: ProtoBuf$Annotation$Argument$Value, arg2: NameResolver): ConstantValue<Object>;
}