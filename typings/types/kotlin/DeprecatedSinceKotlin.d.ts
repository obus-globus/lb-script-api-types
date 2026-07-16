import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface DeprecatedSinceKotlin extends Annotation, Object{
    /*not mapped: */ errorSince(): string;
    /*not mapped: */ hiddenSince(): string;
    /*not mapped: */ warningSince(): string;
}