import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UInt } from '../../../../../../kotlin/UInt.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KmAnnotationArgument$LiteralValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument$LiteralValue.d.ts'
export class KmAnnotationArgument$UIntValue extends KmAnnotationArgument$LiteralValue<UInt> {
    private constructor(arg0: number)
    constructor(arg0: number, arg1: DefaultConstructorMarker)
    readonly value: number;
    equals(arg0: Object | null): boolean;
// (invalid TS: name contains '-')     getValue-pVg5ArA(): number;
    hashCode(): number;
}