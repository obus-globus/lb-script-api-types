import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { Next } from '../../../../../org/spongepowered/asm/mixin/injection/Next.d.ts'
export interface Desc extends Annotation, Object{
    /*not mapped: */ args(): KClass<Object>[];
    /*not mapped: */ id(): string;
    /*not mapped: */ max(): number;
    /*not mapped: */ min(): number;
    /*not mapped: */ next(): Next[];
    /*not mapped: */ owner(): KClass<Object>;
    /*not mapped: */ ret(): KClass<Object>;
    /*not mapped: */ value(): string;
}