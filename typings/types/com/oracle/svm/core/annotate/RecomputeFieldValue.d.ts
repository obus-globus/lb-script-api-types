import type { RecomputeFieldValue$Kind } from '../../../../../com/oracle/svm/core/annotate/RecomputeFieldValue$Kind.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface RecomputeFieldValue extends Annotation, Object{
    /*not mapped: */ declClass(): KClass<Object>;
    /*not mapped: */ declClassName(): string;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ kind(): RecomputeFieldValue$Kind;
    /*not mapped: */ name(): string;
}