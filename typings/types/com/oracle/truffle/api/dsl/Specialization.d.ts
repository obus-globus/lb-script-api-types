import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface Specialization extends Annotation, Object{
    constructor(assumptions: string[], excludeForUncached: boolean, guards: string[], insertBefore: string, limit: string, replaces: string[], rewriteOn: KClass<Throwable>[], unroll: number)
    /*not mapped: */ assumptions(): string[];
    /*not mapped: */ excludeForUncached(): boolean;
    /*not mapped: */ guards(): string[];
    /*not mapped: */ insertBefore(): string;
    /*not mapped: */ limit(): string;
    /*not mapped: */ replaces(): string[];
    /*not mapped: */ rewriteOn(): KClass<Throwable>[];
    /*not mapped: */ unroll(): number;
}