import type { Local } from '../../../../com/llamalad7/mixinextras/sugar/Local.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export interface Definition extends Annotation, Object{
    /*not mapped: */ field(): string[];
    /*not mapped: */ id(): string;
    /*not mapped: */ local(): Local[];
    /*not mapped: */ method(): string[];
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ type(): KClass<Object>[];
}