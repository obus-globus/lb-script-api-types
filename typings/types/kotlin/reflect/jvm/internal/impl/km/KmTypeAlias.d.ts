import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { KmVersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirement.d.ts'
import type { KmTypeAliasExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeAliasExtension.d.ts'
export class KmTypeAlias extends Object {
    constructor(arg0: number, arg1: string)
    readonly annotations: KmAnnotation[];
    readonly compilerPluginMetadata: { [key: string]: number[] };
    expandedType: KmType;
    // private extensions: KmTypeAliasExtension[];
    // private flags: number;
    // private name: string;
    readonly typeParameters: KmTypeParameter[];
    underlyingType: KmType;
    readonly versionRequirements: KmVersionRequirement[];
    getAnnotations(): KmAnnotation[];
    getCompilerPluginMetadata(): { [key: string]: number[] };
    getFlags$org_jetbrains_kotlin_kotlin_metadata(): number;
    getTypeParameters(): KmTypeParameter[];
    getVersionRequirements(): KmVersionRequirement[];
    setExpandedType(arg0: KmType): void;
    setFlags$org_jetbrains_kotlin_kotlin_metadata(arg0: number): void;
    setUnderlyingType(arg0: KmType): void;
}