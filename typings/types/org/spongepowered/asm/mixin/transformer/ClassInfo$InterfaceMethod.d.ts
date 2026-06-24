import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Member } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Member.d.ts'
import type { ClassInfo$Method } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
export class ClassInfo$InterfaceMethod extends ClassInfo$Method {
    constructor(null_: ClassInfo, arg1: ClassInfo$Member)
    readonly owner: ClassInfo;
    getImplementor(): ClassInfo;
    getOwner(): ClassInfo;
}