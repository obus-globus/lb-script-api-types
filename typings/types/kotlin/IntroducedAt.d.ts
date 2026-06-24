import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface IntroducedAt extends Annotation, Object{
    constructor(version: string)
    /*not mapped: */ version(): string;
}