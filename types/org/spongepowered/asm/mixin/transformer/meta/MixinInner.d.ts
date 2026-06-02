import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface MixinInner extends Annotation, Object{
    constructor(mixin: string, name: string)
    /*not mapped: */ mixin(): string;
    /*not mapped: */ name(): string;
}