import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface Operation extends Annotation, Object{
    constructor(forceCached: boolean, javadoc: string, tags: KClass<Tag>[])
    /*not mapped: */ forceCached(): boolean;
    /*not mapped: */ javadoc(): string;
    /*not mapped: */ tags(): KClass<Tag>[];
}