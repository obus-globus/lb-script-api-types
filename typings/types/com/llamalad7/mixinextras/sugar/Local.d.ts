import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export interface Local extends Annotation, Object{
    constructor(argsOnly: boolean, index: number, name: string[], ordinal: number, print: boolean, type: KClass<Object>)
    /*not mapped: */ argsOnly(): boolean;
    /*not mapped: */ index(): number;
    /*not mapped: */ name(): string[];
    /*not mapped: */ ordinal(): number;
    /*not mapped: */ print(): boolean;
    /*not mapped: */ type(): KClass<Object>;
}