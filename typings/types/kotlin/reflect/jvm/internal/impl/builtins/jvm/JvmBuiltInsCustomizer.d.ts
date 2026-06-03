import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { JavaToKotlinClassMapper } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JavaToKotlinClassMapper.d.ts'
import type { JvmBuiltIns$Settings } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JvmBuiltIns$Settings.d.ts'
import type { JvmBuiltInsCustomizer$JDKMemberStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JvmBuiltInsCustomizer$JDKMemberStatus.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
import type { LazyJavaClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaClassDescriptor.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { DeserializedClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedClassDescriptor.d.ts'
import type { CacheWithNotNullValues } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNotNullValues.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class JvmBuiltInsCustomizer extends Object implements AdditionalClassPartsProvider, PlatformDependentDeclarationFilter {
    constructor(arg0: ModuleDescriptor, arg1: StorageManager, arg2: () => JvmBuiltIns$Settings)
    // private cloneableType$delegate: NotNullLazyValue<Object>;
    // private deprecationForSomeOfTheListMethods: MemoizedFunctionToNotNull<Pair<string, string>, AnnotationDescriptor[]>;
    // private j2kClassMapper: JavaToKotlinClassMapper;
    // private javaAnalogueClassesWithCustomSupertypeCache: CacheWithNotNullValues<FqName, ClassDescriptor>;
    // private mockSerializableType: KotlinType;
    // private moduleDescriptor: ModuleDescriptor;
    // private notConsideredDeprecation$delegate: NotNullLazyValue<Object>;
    // private settings$delegate: NotNullLazyValue<Object>;
    // private createCloneForArray(arg0: DeserializedClassDescriptor, arg1: SimpleFunctionDescriptor): SimpleFunctionDescriptor;
    // private createMockJavaIoSerializableType(arg0: StorageManager): KotlinType;
    // private getAdditionalFunctions(arg0: ClassDescriptor, arg1: (param0: MemberScope) => E[]): E[];
    // private getCloneableType(): SimpleType;
    getConstructors(arg0: ClassDescriptor): E[];
    getFunctions(arg0: Name, arg1: ClassDescriptor): E[];
    getFunctionsNames(arg0: ClassDescriptor): Name[];
    // private getJavaAnalogue(arg0: ClassDescriptor): LazyJavaClassDescriptor;
    // private getJdkMethodStatus(arg0: FunctionDescriptor): JvmBuiltInsCustomizer$JDKMemberStatus;
    // private getNotConsideredDeprecation(): AnnotationDescriptor[];
    // private getSettings(): JvmBuiltIns$Settings;
    getSupertypes(arg0: ClassDescriptor): E[];
    isFunctionAvailable(arg0: ClassDescriptor, arg1: SimpleFunctionDescriptor): boolean;
    // private isMutabilityViolation(arg0: SimpleFunctionDescriptor, arg1: boolean): boolean;
    // private isTrivialCopyConstructorFor(arg0: ConstructorDescriptor, arg1: ClassDescriptor): boolean;
}