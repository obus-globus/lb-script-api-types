import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmDeclarationContainer } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmDeclarationContainer.d.ts'
import type { KmEnumEntry } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmEnumEntry.d.ts'
import type { KmFunction } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeAlias } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeAlias.d.ts'
import type { KmTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { KmVersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirement.d.ts'
import type { KmClassExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmClassExtension.d.ts'
export class KmClass extends Object implements KmDeclarationContainer {
    constructor()
    readonly annotations: KmAnnotation[];
    readonly companionObject: string;
    readonly compilerPluginMetadata: JavaMap<string, number[]>;
    readonly constructors: KmConstructor[];
    readonly contextReceiverTypes: KmType[];
    readonly enumEntries: string[];
    // private extensions: KmClassExtension[];
    // private flags: number;
    readonly functions: KmFunction[];
    readonly inlineClassUnderlyingPropertyName: string;
    readonly inlineClassUnderlyingType: KmType;
    readonly kmEnumEntries: KmEnumEntry[];
    name: string;
    readonly nestedClasses: string[];
    readonly properties: KmProperty[];
    readonly sealedSubclasses: string[];
    readonly supertypes: KmType[];
    readonly typeAliases: KmTypeAlias[];
    readonly typeParameters: KmTypeParameter[];
    readonly versionRequirements: KmVersionRequirement[];
    getAnnotations(): KmAnnotation[];
    getCompilerPluginMetadata(): JavaMap<string, number[]>;
    getConstructors(): KmConstructor[];
    getContextReceiverTypes(): KmType[];
    getEnumEntries(): string[];
    getExtensions$org_jetbrains_kotlin_kotlin_metadata(): KmClassExtension[];
    getFlags$org_jetbrains_kotlin_kotlin_metadata(): number;
    getFunctions(): KmFunction[];
    getInlineClassUnderlyingPropertyName(): string;
    getInlineClassUnderlyingType(): KmType;
    getKmEnumEntries(): KmEnumEntry[];
    getName(): string;
    getNestedClasses(): string[];
    getProperties(): KmProperty[];
    getSealedSubclasses(): string[];
    getSupertypes(): KmType[];
    getTypeAliases(): KmTypeAlias[];
    getTypeParameters(): KmTypeParameter[];
    getVersionRequirements(): KmVersionRequirement[];
    setCompanionObject(arg0: string): void;
    setFlags$org_jetbrains_kotlin_kotlin_metadata(arg0: number): void;
    setInlineClassUnderlyingPropertyName(arg0: string): void;
    setInlineClassUnderlyingType(arg0: KmType): void;
    setName(arg0: string): void;
}