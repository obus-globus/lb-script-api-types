import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { ClassDescriptorFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/ClassDescriptorFactory.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
import type { LookupTracker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupTracker.d.ts'
import type { BinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { VersionRequirementTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { SamConversionResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/sam/SamConversionResolver.d.ts'
import type { AnnotationAndConstantLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationAndConstantLoader.d.ts'
import type { ClassDataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDataFinder.d.ts'
import type { ClassDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDeserializer.d.ts'
import type { ContractDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ContractDeserializer.d.ts'
import type { DeserializationConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationConfiguration.d.ts'
import type { DeserializationContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationContext.d.ts'
import type { EnumEntriesDeserializationSupport } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/EnumEntriesDeserializationSupport.d.ts'
import type { ErrorReporter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
import type { FlexibleTypeDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/FlexibleTypeDeserializer.d.ts'
import type { LocalClassifierTypeSettings } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/LocalClassifierTypeSettings.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { TypeAttributeTranslator } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttributeTranslator.d.ts'
import type { NewKotlinTypeChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewKotlinTypeChecker.d.ts'
export class DeserializationComponents extends Object {
    constructor(arg0: StorageManager, arg1: ModuleDescriptor, arg2: DeserializationConfiguration, arg3: ClassDataFinder, arg4: AnnotationAndConstantLoader<Object, Object>, arg5: PackageFragmentProvider, arg6: LocalClassifierTypeSettings, arg7: ErrorReporter, arg8: LookupTracker, arg9: FlexibleTypeDeserializer, arg10: (Object | null)[], arg11: NotFoundClasses, arg12: ContractDeserializer, arg13: AdditionalClassPartsProvider, arg14: PlatformDependentDeclarationFilter, arg15: ExtensionRegistryLite, arg16: NewKotlinTypeChecker, arg17: SamConversionResolver, arg18: (Object | null)[], arg19: EnumEntriesDeserializationSupport, arg20: number, arg21: DefaultConstructorMarker)
    constructor(arg0: StorageManager, arg1: ModuleDescriptor, arg2: DeserializationConfiguration, arg3: ClassDataFinder, arg4: AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<Object>>, arg5: PackageFragmentProvider, arg6: LocalClassifierTypeSettings, arg7: ErrorReporter, arg8: LookupTracker, arg9: FlexibleTypeDeserializer, arg10: ClassDescriptorFactory[], arg11: NotFoundClasses, arg12: ContractDeserializer, arg13: AdditionalClassPartsProvider, arg14: PlatformDependentDeclarationFilter, arg15: ExtensionRegistryLite, arg16: NewKotlinTypeChecker, arg17: SamConversionResolver, arg18: TypeAttributeTranslator[], arg19: EnumEntriesDeserializationSupport)
    readonly additionalClassPartsProvider: AdditionalClassPartsProvider;
    readonly annotationAndConstantLoader: AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<Object>>;
    readonly classDataFinder: ClassDataFinder;
    readonly classDeserializer: ClassDeserializer;
    readonly configuration: DeserializationConfiguration;
    readonly contractDeserializer: ContractDeserializer;
    readonly enumEntriesDeserializationSupport: EnumEntriesDeserializationSupport;
    readonly errorReporter: ErrorReporter;
    readonly extensionRegistryLite: ExtensionRegistryLite;
    readonly fictitiousClassDescriptorFactories: ClassDescriptorFactory[];
    readonly flexibleTypeDeserializer: FlexibleTypeDeserializer;
    readonly kotlinTypeChecker: NewKotlinTypeChecker;
    readonly localClassifierTypeSettings: LocalClassifierTypeSettings;
    readonly lookupTracker: LookupTracker;
    readonly moduleDescriptor: ModuleDescriptor;
    readonly notFoundClasses: NotFoundClasses;
    readonly packageFragmentProvider: PackageFragmentProvider;
    readonly platformDependentDeclarationFilter: PlatformDependentDeclarationFilter;
    // private samConversionResolver: SamConversionResolver;
    readonly storageManager: StorageManager;
    readonly typeAttributeTranslators: TypeAttributeTranslator[];
    createContext(arg0: PackageFragmentDescriptor, arg1: NameResolver, arg2: TypeTable, arg3: VersionRequirementTable, arg4: BinaryVersion, arg5: DeserializedContainerSource): DeserializationContext;
    deserializeClass(arg0: ClassId): ClassDescriptor;
    getAdditionalClassPartsProvider(): AdditionalClassPartsProvider;
    getAnnotationAndConstantLoader(): AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<Object>>;
    getClassDataFinder(): ClassDataFinder;
    getClassDeserializer(): ClassDeserializer;
    getConfiguration(): DeserializationConfiguration;
    getContractDeserializer(): ContractDeserializer;
    getEnumEntriesDeserializationSupport(): EnumEntriesDeserializationSupport;
    getErrorReporter(): ErrorReporter;
    getExtensionRegistryLite(): ExtensionRegistryLite;
    getFictitiousClassDescriptorFactories(): ClassDescriptorFactory[];
    getFlexibleTypeDeserializer(): FlexibleTypeDeserializer;
    getKotlinTypeChecker(): NewKotlinTypeChecker;
    getLocalClassifierTypeSettings(): LocalClassifierTypeSettings;
    getLookupTracker(): LookupTracker;
    getModuleDescriptor(): ModuleDescriptor;
    getNotFoundClasses(): NotFoundClasses;
    getPackageFragmentProvider(): PackageFragmentProvider;
    getPlatformDependentDeclarationFilter(): PlatformDependentDeclarationFilter;
    getStorageManager(): StorageManager;
    getTypeAttributeTranslators(): TypeAttributeTranslator[];
}