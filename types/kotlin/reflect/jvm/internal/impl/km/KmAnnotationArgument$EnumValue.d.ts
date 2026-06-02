import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
export class KmAnnotationArgument$EnumValue extends KmAnnotationArgument {
    constructor(arg0: string, arg1: string)
    readonly enumClassName: string;
    readonly enumEntryName: string;
    equals(arg0: Object | null): boolean;
    getEnumClassName(): string;
    getEnumEntryName(): string;
    hashCode(): number;
    toString(): string;
}