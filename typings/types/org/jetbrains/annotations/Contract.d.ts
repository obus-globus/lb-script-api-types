import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Contract extends Annotation, Object{
    constructor(mutates: string, pure: boolean, value: string)
    /*not mapped: */ mutates(): string;
    /*not mapped: */ pure(): boolean;
    /*not mapped: */ value(): string;
}