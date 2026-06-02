import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface DeprecatedSinceKotlin extends Annotation, Object{
    constructor(warningSince: string, errorSince: string, hiddenSince: string)
    /*not mapped: */ errorSince(): string;
    /*not mapped: */ hiddenSince(): string;
    /*not mapped: */ warningSince(): string;
}