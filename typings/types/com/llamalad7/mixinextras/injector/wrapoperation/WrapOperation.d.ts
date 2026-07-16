import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { At } from '../../../../../org/spongepowered/asm/mixin/injection/At.d.ts'
import type { Constant } from '../../../../../org/spongepowered/asm/mixin/injection/Constant.d.ts'
import type { Slice } from '../../../../../org/spongepowered/asm/mixin/injection/Slice.d.ts'
export interface WrapOperation extends Annotation, Object{
    /*not mapped: */ allow(): number;
    /*not mapped: */ at(): At[];
    /*not mapped: */ constant(): Constant[];
    /*not mapped: */ expect(): number;
    /*not mapped: */ method(): string[];
    /*not mapped: */ order(): number;
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ require(): number;
    /*not mapped: */ slice(): Slice[];
}