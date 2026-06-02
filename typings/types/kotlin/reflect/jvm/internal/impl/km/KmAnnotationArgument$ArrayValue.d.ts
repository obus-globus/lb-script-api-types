import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
export class KmAnnotationArgument$ArrayValue extends KmAnnotationArgument {
    constructor(arg0: KmAnnotationArgument[])
    readonly elements: KmAnnotationArgument[];
    equals(arg0: Object | null): boolean;
    getElements(): KmAnnotationArgument[];
    hashCode(): number;
    toString(): string;
}