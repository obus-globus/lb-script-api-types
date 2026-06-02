import type { Open$Type } from '../../../../dev/lukebemish/opensesame/annotations/Open$Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export interface Open extends Annotation, Object{
    constructor(name: string, targetClass: KClass<Object>, targetName: string, targetProvider: KClass<Object>, type: Open$Type, unsafe: boolean)
    /*not mapped: */ name(): string;
    /*not mapped: */ targetClass(): KClass<Object>;
    /*not mapped: */ targetName(): string;
    /*not mapped: */ targetProvider(): KClass<Object>;
    /*not mapped: */ type(): Open$Type;
    /*not mapped: */ unsafe(): boolean;
}