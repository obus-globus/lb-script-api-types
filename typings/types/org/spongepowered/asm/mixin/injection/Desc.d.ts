import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KClass as KClass_2 } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { Next } from '../../../../../org/spongepowered/asm/mixin/injection/Next.d.ts'
export interface Desc extends Annotation, Object{
    constructor(args: KClass<Object>[], id: string, max: number, min: number, next: Next[], owner: KClass<Object>, ret: KClass<Object>, value: string)
    /*not mapped: */ args(): KClass_2<Object>[];
    /*not mapped: */ id(): string;
    /*not mapped: */ max(): number;
    /*not mapped: */ min(): number;
    /*not mapped: */ next(): Next[];
    /*not mapped: */ owner(): KClass_2<Object>;
    /*not mapped: */ ret(): KClass_2<Object>;
    /*not mapped: */ value(): string;
}