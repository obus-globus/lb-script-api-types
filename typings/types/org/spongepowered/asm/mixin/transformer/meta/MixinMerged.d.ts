import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface MixinMerged extends Annotation, Object{
    constructor(mixin: string, priority: number)
    /*not mapped: */ mixin(): string;
    /*not mapped: */ priority(): number;
}