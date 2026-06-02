import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Binding extends Annotation, Object{
    constructor(pure: boolean, skipChecking: boolean, value: string[])
    /*not mapped: */ pure(): boolean;
    /*not mapped: */ skipChecking(): boolean;
    /*not mapped: */ value(): string[];
}