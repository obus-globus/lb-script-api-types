import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/ClassKind.d.ts'
import type { KmClass } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
import type { Visibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/Visibility.d.ts'
export class Attributes extends Object {
    static getKind(paramarg0: KmClass): ClassKind;
    static getModality(paramarg0: KmClass): Modality;
    static isData(paramarg0: KmClass): boolean;
    static isDefinitelyNonNull(paramarg0: KmType): boolean;
    static isFunInterface(paramarg0: KmClass): boolean;
    static isInner(paramarg0: KmClass): boolean;
    static isNullable(paramarg0: KmType): boolean;
    static isReified(paramarg0: KmTypeParameter): boolean;
    static isSuspend(paramarg0: KmType): boolean;
    static isValue(paramarg0: KmClass): boolean;
    static setKind(paramarg0: KmClass, paramarg1: ClassKind): void;
    static setModality(paramarg0: KmClass, paramarg1: Modality): void;
    static setVisibility(paramarg0: KmClass, paramarg1: Visibility): void;
}