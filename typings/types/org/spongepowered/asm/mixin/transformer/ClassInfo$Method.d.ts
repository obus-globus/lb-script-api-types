import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$FrameData } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$FrameData.d.ts'
import type { ClassInfo$Member } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Member.d.ts'
export class ClassInfo$Method extends ClassInfo$Member {
    constructor(null_: ClassInfo, arg1: string, arg2: string)
    constructor(null_: ClassInfo, arg1: string, arg2: string, arg3: number)
    constructor(null_: ClassInfo, arg1: string, arg2: string, arg3: number, arg4: boolean)
    constructor(null_: ClassInfo, arg1: MethodNode)
    constructor(null_: ClassInfo, arg1: MethodNode, arg2: boolean)
    constructor(null_: ClassInfo, arg1: ClassInfo$Member)
    readonly conformed: boolean;
    readonly frames: ClassInfo$FrameData[];
    // private isAccessor: boolean;
    conform(arg0: string): string;
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    // private gatherFrames(arg0: MethodNode): ClassInfo$FrameData[];
    getFrames(): ClassInfo$FrameData[];
    getOwner(): ClassInfo;
    isAccessor(): boolean;
    isConformed(): boolean;
    renameTo(arg0: string): string;
}