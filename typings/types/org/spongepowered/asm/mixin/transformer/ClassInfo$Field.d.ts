import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Member } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Member.d.ts'
export class ClassInfo$Field extends ClassInfo$Member {
    constructor(null_: ClassInfo$Field, arg1: string, arg2: string, arg3: number)
    constructor(null_: ClassInfo$Field, arg1: string, arg2: string, arg3: number, arg4: boolean)
    constructor(null_: ClassInfo$Field, arg1: FieldNode)
    constructor(null_: ClassInfo$Field, arg1: FieldNode, arg2: boolean)
    constructor(null_: ClassInfo$Field, arg1: ClassInfo$Member)
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    getDisplayFormat(): string;
    getOwner(): ClassInfo;
}