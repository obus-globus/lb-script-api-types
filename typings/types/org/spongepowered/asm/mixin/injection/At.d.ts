import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { At$Shift } from '../../../../../org/spongepowered/asm/mixin/injection/At$Shift.d.ts'
import type { Desc } from '../../../../../org/spongepowered/asm/mixin/injection/Desc.d.ts'
export interface At extends Annotation, Object{
    /*not mapped: */ args(): string[];
    /*not mapped: */ by(): number;
    /*not mapped: */ desc(): Desc;
    /*not mapped: */ id(): string;
    /*not mapped: */ opcode(): number;
    /*not mapped: */ ordinal(): number;
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ shift(): At$Shift;
    /*not mapped: */ slice(): string;
    /*not mapped: */ target(): string;
    /*not mapped: */ unsafe(): boolean;
    /*not mapped: */ value(): string;
}