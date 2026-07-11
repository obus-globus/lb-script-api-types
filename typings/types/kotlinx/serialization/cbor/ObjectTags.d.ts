import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ObjectTags extends Annotation, Object{
    constructor(...tags: (Object | null)[])
    /*not mapped: */ tags(): (Object | null)[];
}