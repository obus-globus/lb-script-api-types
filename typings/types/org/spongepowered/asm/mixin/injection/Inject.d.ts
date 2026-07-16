import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { At } from '../../../../../org/spongepowered/asm/mixin/injection/At.d.ts'
import type { Desc } from '../../../../../org/spongepowered/asm/mixin/injection/Desc.d.ts'
import type { Slice } from '../../../../../org/spongepowered/asm/mixin/injection/Slice.d.ts'
import type { LocalCapture } from '../../../../../org/spongepowered/asm/mixin/injection/callback/LocalCapture.d.ts'
export interface Inject extends Annotation, Object{
    /*not mapped: */ allow(): number;
    /*not mapped: */ at(): At[];
    /*not mapped: */ cancellable(): boolean;
    /*not mapped: */ constraints(): string;
    /*not mapped: */ expect(): number;
    /*not mapped: */ id(): string;
    /*not mapped: */ locals(): LocalCapture;
    /*not mapped: */ method(): string[];
    /*not mapped: */ order(): number;
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ require(): number;
    /*not mapped: */ slice(): Slice[];
    /*not mapped: */ target(): Desc[];
}