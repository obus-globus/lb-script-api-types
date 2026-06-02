import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { At } from '../../../../../org/spongepowered/asm/mixin/injection/At.d.ts'
export interface Slice extends Annotation, Object{
    constructor(from: At, id: string, to: At)
    /*not mapped: */ from(): At;
    /*not mapped: */ id(): string;
    /*not mapped: */ to(): At;
}