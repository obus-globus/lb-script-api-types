import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Flow extends Annotation, Object{
    constructor(source: string, sourceIsContainer: boolean, target: string, targetIsContainer: boolean)
    /*not mapped: */ source(): string;
    /*not mapped: */ sourceIsContainer(): boolean;
    /*not mapped: */ target(): string;
    /*not mapped: */ targetIsContainer(): boolean;
}