import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Method } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { MixinInfo$MixinMethodNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinMethodNode.d.ts'
export class MethodMapper extends Object {
    constructor(arg0: MixinEnvironment, arg1: ClassInfo)
    // private info: ClassInfo;
    // private nextUniqueFieldIndex: number;
    // private nextUniqueMethodIndex: number;
    getHandlerName(arg0: MixinInfo, arg1: MixinInfo$MixinMethodNode): string;
    getUniqueName(arg0: MixinInfo, arg1: FieldNode, arg2: string): string;
    getUniqueName(arg0: MixinInfo, arg1: MethodNode, arg2: string, arg3: boolean): string;
    remapHandlerMethod(arg0: MixinInfo, arg1: MethodNode, arg2: ClassInfo$Method): void;
    reset(): void;
}