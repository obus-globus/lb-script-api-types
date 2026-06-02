import type { Annotation } from '../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface PluginBuilderAttribute extends Annotation, Object{
    constructor(sensitive: boolean, value: string)
    /*not mapped: */ sensitive(): boolean;
    /*not mapped: */ value(): string;
}