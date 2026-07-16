import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface OperationProxy extends Annotation, Object{
    /*not mapped: */ forceCached(): boolean;
    /*not mapped: */ javadoc(): string;
    /*not mapped: */ name(): string;
    /*not mapped: */ tags(): KClass<Tag>[];
    /*not mapped: */ value(): KClass<Object>;
}