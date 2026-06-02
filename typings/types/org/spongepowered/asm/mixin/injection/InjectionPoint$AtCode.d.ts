import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InjectionPoint$AtCode extends Annotation, Object{
    constructor(namespace: string, value: string)
    /*not mapped: */ namespace(): string;
    /*not mapped: */ value(): string;
}