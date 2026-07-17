import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
export abstract class KmAnnotationArgument$LiteralValue<T extends unknown> extends KmAnnotationArgument {
    private constructor()
    getValue(): T;
    toString(): string;
}