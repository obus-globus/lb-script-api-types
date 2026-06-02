import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmPackage } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { KmProperty } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { KmClassExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmClassExtension.d.ts'
import type { KmConstructorExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmConstructorExtension.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { KmFunctionExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmFunctionExtension.d.ts'
import type { KmPackageExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPackageExtension.d.ts'
import type { KmPropertyExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPropertyExtension.d.ts'
import type { KmTypeExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeExtension.d.ts'
import type { KmTypeParameterExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeParameterExtension.d.ts'
export class ExtensionNodesKt extends Object {
    static getExtension(paramarg0: KmClass, paramarg1: KmExtensionType): KmClassExtension;
    static getExtension(paramarg0: KmConstructor, paramarg1: KmExtensionType): KmConstructorExtension;
    static getExtension(paramarg0: KmFunction, paramarg1: KmExtensionType): KmFunctionExtension;
    static getExtension(paramarg0: KmPackage, paramarg1: KmExtensionType): KmPackageExtension;
    static getExtension(paramarg0: KmProperty, paramarg1: KmExtensionType): KmPropertyExtension;
    static getExtension(paramarg0: KmType, paramarg1: KmExtensionType): KmTypeExtension;
    static getExtension(paramarg0: KmTypeParameter, paramarg1: KmExtensionType): KmTypeParameterExtension;
}