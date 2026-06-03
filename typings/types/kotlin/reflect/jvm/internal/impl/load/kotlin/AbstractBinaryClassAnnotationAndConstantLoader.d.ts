import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractBinaryClassAnnotationLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader.d.ts'
import type { AbstractBinaryClassAnnotationLoader$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader$Companion.d.ts'
import type { AnnotationsContainerWithConstants } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AnnotationsContainerWithConstants.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { MemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { AnnotatedCallableKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotatedCallableKind.d.ts'
import type { AnnotationAndConstantLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationAndConstantLoader.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export abstract class AbstractBinaryClassAnnotationAndConstantLoader<A extends Object | number | string | boolean, C extends Object | number | string | boolean> extends AbstractBinaryClassAnnotationLoader<A, AnnotationsContainerWithConstants<A, C>> implements AnnotationAndConstantLoader<A, C> {
    static Companion: AbstractBinaryClassAnnotationLoader$Companion;
    constructor(arg0: StorageManager, arg1: KotlinClassFinder)
    // private storage: MemoizedFunctionToNotNull<KotlinJvmBinaryClass, AnnotationsContainerWithConstants<A, C>>;
    getAnnotationsContainer(arg0: KotlinJvmBinaryClass): AnnotationsContainerWithConstants<A, C>;
    isRepeatableWithImplicitContainer(arg0: ClassId, arg1: Map<Name, ConstantValue<Object>>): boolean;
    loadAnnotationDefaultValue(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: KotlinType): C;
    // private loadAnnotationsAndInitializers(arg0: KotlinJvmBinaryClass): AnnotationsContainerWithConstants<A, C>;
    loadConstant(arg0: string, arg1: Object): C;
    // private loadConstantFromProperty(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: AnnotatedCallableKind, arg3: KotlinType, arg4: (param0: AnnotationsContainerWithConstants<A, C>, param1: MemberSignature) => C): C;
    loadPropertyConstant(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: KotlinType): C;
    transformToUnsignedConstant(arg0: C): C;
}