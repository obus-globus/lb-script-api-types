import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/ClassKind.d.ts'
import type { KmClass } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmPropertyAccessorAttributes } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPropertyAccessorAttributes.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { KmValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
import type { Visibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/Visibility.d.ts'
export class Attributes extends Object {
    static getDeclaresDefaultValue(paramarg0: KmValueParameter): boolean;
    static getKind(paramarg0: KmClass): ClassKind;
    static getModality(paramarg0: KmClass): Modality;
    static getModality(paramarg0: KmFunction): Modality;
    static getModality(paramarg0: KmProperty): Modality;
    static getModality(paramarg0: KmPropertyAccessorAttributes): Modality;
    static getVisibility(paramarg0: KmConstructor): Visibility;
    static getVisibility(paramarg0: KmFunction): Visibility;
    static getVisibility(paramarg0: KmProperty): Visibility;
    static getVisibility(paramarg0: KmPropertyAccessorAttributes): Visibility;
    static isConst(paramarg0: KmProperty): boolean;
    static isData(paramarg0: KmClass): boolean;
    static isDefinitelyNonNull(paramarg0: KmType): boolean;
    static isDelegated(paramarg0: KmProperty): boolean;
    static isExternal(paramarg0: KmFunction): boolean;
    static isExternal(paramarg0: KmPropertyAccessorAttributes): boolean;
    static isFunInterface(paramarg0: KmClass): boolean;
    static isInfix(paramarg0: KmFunction): boolean;
    static isInline(paramarg0: KmFunction): boolean;
    static isInline(paramarg0: KmPropertyAccessorAttributes): boolean;
    static isInner(paramarg0: KmClass): boolean;
    static isLateinit(paramarg0: KmProperty): boolean;
    static isNullable(paramarg0: KmType): boolean;
    static isOperator(paramarg0: KmFunction): boolean;
    static isReified(paramarg0: KmTypeParameter): boolean;
    static isSecondary(paramarg0: KmConstructor): boolean;
    static isSuspend(paramarg0: KmFunction): boolean;
    static isSuspend(paramarg0: KmType): boolean;
    static isValue(paramarg0: KmClass): boolean;
    static isVar(paramarg0: KmProperty): boolean;
    static setKind(paramarg0: KmClass, paramarg1: ClassKind): void;
    static setModality(paramarg0: KmClass, paramarg1: Modality): void;
    static setVisibility(paramarg0: KmClass, paramarg1: Visibility): void;
}