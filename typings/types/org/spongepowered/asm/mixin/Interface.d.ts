import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KClass as KClass_2 } from '../../../../kotlin/reflect/KClass.d.ts'
import type { Interface$Remap } from '../../../../org/spongepowered/asm/mixin/Interface$Remap.d.ts'
export interface Interface extends Annotation, Object{
    constructor(iface: KClass<Object>, prefix: string, remap: Interface$Remap, unique: boolean)
    /*not mapped: */ iface(): KClass_2<Object>;
    /*not mapped: */ prefix(): string;
    /*not mapped: */ remap(): Interface$Remap;
    /*not mapped: */ unique(): boolean;
}