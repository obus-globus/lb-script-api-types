import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
export class KmAnnotation extends Object {
    constructor(arg0: string, arg1: JavaMap<string, KmAnnotationArgument>)
    readonly arguments: JavaMap<string, KmAnnotationArgument>;
    readonly className: string;
    equals(arg0: Object | null): boolean;
    getArguments(): JavaMap<string, KmAnnotationArgument>;
    getClassName(): string;
    hashCode(): number;
    toString(): string;
}