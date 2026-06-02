import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
export class KmAnnotationArgument$ArrayKClassValue extends KmAnnotationArgument {
    constructor(arg0: string, arg1: number)
    readonly arrayDimensionCount: number;
    readonly className: string;
    // private stringRepresentation: string;
    equals(arg0: Object | null): boolean;
    getArrayDimensionCount(): number;
    getClassName(): string;
    hashCode(): number;
    toString(): string;
}