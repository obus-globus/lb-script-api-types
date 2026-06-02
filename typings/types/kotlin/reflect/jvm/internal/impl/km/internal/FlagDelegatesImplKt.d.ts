import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KMutableProperty1 } from '../../../../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KmClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmPropertyAccessorAttributes } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPropertyAccessorAttributes.d.ts'
import type { KmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeAlias } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeAlias.d.ts'
import type { KmValueParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { MemberKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/MemberKind.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
import type { Visibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/Visibility.d.ts'
import type { BooleanFlagDelegate } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/BooleanFlagDelegate.d.ts'
import type { EnumFlagDelegate } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/EnumFlagDelegate.d.ts'
import type { FlagImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/FlagImpl.d.ts'
export class FlagDelegatesImplKt extends Object {
    static classBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmClass>;
    static constructorBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmConstructor>;
    static functionBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmFunction>;
    static memberKindDelegate(paramarg0: KMutableProperty1<Object, number>): EnumFlagDelegate<Object, MemberKind>;
    static modalityDelegate(paramarg0: KMutableProperty1<Object, number>): EnumFlagDelegate<Object, Modality>;
    static propertyAccessorBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmPropertyAccessorAttributes>;
    static propertyBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmProperty>;
    static typeAliasBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmTypeAlias>;
    static typeBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmType>;
    static valueParameterBooleanFlag(paramarg0: FlagImpl): BooleanFlagDelegate<KmValueParameter>;
    static visibilityDelegate(paramarg0: KMutableProperty1<Object, number>): EnumFlagDelegate<Object, Visibility>;
}