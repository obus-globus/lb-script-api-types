import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface NodeChild extends Annotation, Object{
    constructor(allowUncached: boolean, executeWith: string[], implicit: boolean, implicitCreate: string, type: KClass<Object>, uncached: string, value: string)
    /*not mapped: */ allowUncached(): boolean;
    /*not mapped: */ executeWith(): string[];
    /*not mapped: */ implicit(): boolean;
    /*not mapped: */ implicitCreate(): string;
    /*not mapped: */ type(): KClass<Object>;
    /*not mapped: */ uncached(): string;
    /*not mapped: */ value(): string;
}