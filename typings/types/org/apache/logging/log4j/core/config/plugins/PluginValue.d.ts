import type { Annotation } from '../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface PluginValue extends Annotation, Object{
    constructor(substitute: boolean, value: string)
    /*not mapped: */ substitute(): boolean;
    /*not mapped: */ value(): string;
}