import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmPackage } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { KmProperty } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { JvmFieldSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmFieldSignature.d.ts'
import type { JvmMethodSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMethodSignature.d.ts'
export class JvmExtensionsKt extends Object {
    static getAnnotations(paramarg0: KmType): KmAnnotation[];
    static getFieldSignature(paramarg0: KmProperty): JvmFieldSignature;
    static getGetterSignature(paramarg0: KmProperty): JvmMethodSignature;
    static getLocalDelegatedProperties(paramarg0: KmClass): KmProperty[];
    static getLocalDelegatedProperties(paramarg0: KmPackage): KmProperty[];
    static getModuleName(paramarg0: KmClass): string;
    static getSetterSignature(paramarg0: KmProperty): JvmMethodSignature;
    static getSignature(paramarg0: KmConstructor): JvmMethodSignature;
    static getSignature(paramarg0: KmFunction): JvmMethodSignature;
    static getSyntheticMethodForAnnotations(paramarg0: KmProperty): JvmMethodSignature;
    static getSyntheticMethodForDelegate(paramarg0: KmProperty): JvmMethodSignature;
    static isRaw(paramarg0: KmType): boolean;
}