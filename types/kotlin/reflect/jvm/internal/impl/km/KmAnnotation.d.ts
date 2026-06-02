import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
export class KmAnnotation extends Object {
    constructor(arg0: string, arg1: { [key: string]: KmAnnotationArgument })
    readonly arguments: { [key: string]: KmAnnotationArgument };
    readonly className: string;
    equals(arg0: Object | null): boolean;
    getArguments(): { [key: string]: KmAnnotationArgument };
    getClassName(): string;
    hashCode(): number;
    toString(): string;
}