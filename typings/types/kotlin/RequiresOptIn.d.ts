import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { RequiresOptIn$Level } from '../kotlin/RequiresOptIn$Level.d.ts'
export interface RequiresOptIn extends Annotation, Object{
    constructor(message: string, level: RequiresOptIn$Level)
    /*not mapped: */ level(): RequiresOptIn$Level;
    /*not mapped: */ message(): string;
}