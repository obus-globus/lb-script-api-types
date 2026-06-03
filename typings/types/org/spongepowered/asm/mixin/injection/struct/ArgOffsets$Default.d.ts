import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { ArgOffsets } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/ArgOffsets.d.ts'
export class ArgOffsets$Default extends ArgOffsets {
    static DEFAULT: ArgOffsets;
    static KEY: string;
    constructor()
    apply(arg0: Type[]): Type[];
    getArgIndex(arg0: number): number;
    getArgIndex(arg0: number, arg1: boolean): number;
}