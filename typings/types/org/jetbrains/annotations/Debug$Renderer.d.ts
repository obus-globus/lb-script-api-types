import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Debug$Renderer extends Annotation, Object{
    constructor(childrenArray: string, hasChildren: string, text: string)
    /*not mapped: */ childrenArray(): string;
    /*not mapped: */ hasChildren(): string;
    /*not mapped: */ text(): string;
}