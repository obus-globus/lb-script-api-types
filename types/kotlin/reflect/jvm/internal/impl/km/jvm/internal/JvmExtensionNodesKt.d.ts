import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmPackage } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { KmProperty } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { JvmClassExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmClassExtension.d.ts'
import type { JvmConstructorExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmConstructorExtension.d.ts'
import type { JvmFunctionExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmFunctionExtension.d.ts'
import type { JvmPackageExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmPackageExtension.d.ts'
import type { JvmPropertyExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmPropertyExtension.d.ts'
import type { JvmTypeExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmTypeExtension.d.ts'
import type { JvmTypeParameterExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmTypeParameterExtension.d.ts'
export class JvmExtensionNodesKt extends Object {
    static getJvm(paramarg0: KmClass): JvmClassExtension;
    static getJvm(paramarg0: KmConstructor): JvmConstructorExtension;
    static getJvm(paramarg0: KmFunction): JvmFunctionExtension;
    static getJvm(paramarg0: KmPackage): JvmPackageExtension;
    static getJvm(paramarg0: KmProperty): JvmPropertyExtension;
    static getJvm(paramarg0: KmType): JvmTypeExtension;
    static getJvm(paramarg0: KmTypeParameter): JvmTypeParameterExtension;
}