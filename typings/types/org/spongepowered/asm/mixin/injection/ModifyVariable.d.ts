import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { At } from '../../../../../org/spongepowered/asm/mixin/injection/At.d.ts'
import type { Desc } from '../../../../../org/spongepowered/asm/mixin/injection/Desc.d.ts'
import type { Slice } from '../../../../../org/spongepowered/asm/mixin/injection/Slice.d.ts'
export interface ModifyVariable extends Annotation, Object{
    /*not mapped: */ allow(): number;
    /*not mapped: */ argsOnly(): boolean;
    /*not mapped: */ at(): At;
    /*not mapped: */ constraints(): string;
    /*not mapped: */ expect(): number;
    /*not mapped: */ index(): number;
    /*not mapped: */ method(): string[];
    /*not mapped: */ name(): string[];
    /*not mapped: */ order(): number;
    /*not mapped: */ ordinal(): number;
    /*not mapped: */ print(): boolean;
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ require(): number;
    /*not mapped: */ slice(): Slice;
    /*not mapped: */ target(): Desc[];
}