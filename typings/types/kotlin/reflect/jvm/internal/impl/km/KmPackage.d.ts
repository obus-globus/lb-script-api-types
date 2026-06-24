import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmDeclarationContainer } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmDeclarationContainer.d.ts'
import type { KmFunction } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmTypeAlias } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeAlias.d.ts'
import type { KmPackageExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPackageExtension.d.ts'
export class KmPackage extends Object implements KmDeclarationContainer {
    constructor()
    // private extensions: KmPackageExtension[];
    readonly functions: KmFunction[];
    readonly properties: KmProperty[];
    readonly typeAliases: KmTypeAlias[];
    getExtensions$org_jetbrains_kotlin_kotlin_metadata(): KmPackageExtension[];
    getFunctions(): KmFunction[];
    getProperties(): KmProperty[];
    getTypeAliases(): KmTypeAlias[];
}