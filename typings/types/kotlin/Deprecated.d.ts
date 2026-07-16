import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { DeprecationLevel } from '../kotlin/DeprecationLevel.d.ts'
import type { ReplaceWith } from '../kotlin/ReplaceWith.d.ts'
export interface Deprecated extends Annotation, Object{
    /*not mapped: */ level(): DeprecationLevel;
    /*not mapped: */ message(): string;
    /*not mapped: */ replaceWith(): ReplaceWith;
}