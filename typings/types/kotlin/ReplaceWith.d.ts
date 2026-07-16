import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface ReplaceWith extends Annotation, Object{
    /*not mapped: */ expression(): string;
    /*not mapped: */ imports(): string[];
}