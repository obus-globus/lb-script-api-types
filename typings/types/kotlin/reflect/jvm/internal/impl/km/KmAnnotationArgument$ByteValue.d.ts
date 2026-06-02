import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument$LiteralValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument$LiteralValue.d.ts'
export class KmAnnotationArgument$ByteValue extends KmAnnotationArgument$LiteralValue<number> {
    constructor(arg0: number)
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getValue(): number;
    hashCode(): number;
}