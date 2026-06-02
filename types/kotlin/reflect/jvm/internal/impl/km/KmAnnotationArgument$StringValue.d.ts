import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument$LiteralValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument$LiteralValue.d.ts'
export class KmAnnotationArgument$StringValue extends KmAnnotationArgument$LiteralValue<string> {
    constructor(arg0: string)
    readonly value: string;
    equals(arg0: Object | null): boolean;
    getValue(): string;
    hashCode(): number;
}