import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface GenerateLibrary$Abstract extends Annotation, Object{
    constructor(ifExported: string[], ifExportedAsWarning: string[])
    /*not mapped: */ ifExported(): string[];
    /*not mapped: */ ifExportedAsWarning(): string[];
}