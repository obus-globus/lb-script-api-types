import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { At } from '../../../../../org/spongepowered/asm/mixin/injection/At.d.ts'
import type { Desc } from '../../../../../org/spongepowered/asm/mixin/injection/Desc.d.ts'
import type { Slice } from '../../../../../org/spongepowered/asm/mixin/injection/Slice.d.ts'
export interface ModifyArgs extends Annotation, Object{
    constructor(allow: number, at: At, constraints: string, expect: number, method: string[], order: number, remap: boolean, require: number, slice: Slice, target: Desc[])
    /*not mapped: */ allow(): number;
    /*not mapped: */ at(): At;
    /*not mapped: */ constraints(): string;
    /*not mapped: */ expect(): number;
    /*not mapped: */ method(): string[];
    /*not mapped: */ order(): number;
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ require(): number;
    /*not mapped: */ slice(): Slice;
    /*not mapped: */ target(): Desc[];
}