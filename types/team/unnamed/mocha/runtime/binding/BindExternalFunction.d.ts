import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface BindExternalFunction extends Annotation, Object{
    constructor(args: KClass<Object>[], as: string, at: KClass<Object>, name: string, pure: boolean)
    /*not mapped: */ args(): KClass<Object>[];
    /*not mapped: */ as(): string;
    /*not mapped: */ at(): KClass<Object>;
    /*not mapped: */ name(): string;
    /*not mapped: */ pure(): boolean;
}