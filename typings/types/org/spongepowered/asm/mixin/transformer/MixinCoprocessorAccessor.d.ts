import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Method } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
import type { MixinCoprocessor } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessor.d.ts'
import type { MixinCoprocessor$ProcessResult } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessor$ProcessResult.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
export class MixinCoprocessorAccessor extends MixinCoprocessor {
    constructor(arg0: string)
    // private accessorMixins: JavaMap<string, MixinInfo>;
    // private sessionId: string;
    couldTransform(arg0: string): boolean;
    // private getAccessorMethod(arg0: MixinInfo, arg1: MethodNode, arg2: ClassInfo): ClassInfo$Method;
    getName(): string;
    onPrepare(arg0: MixinInfo): void;
    process(arg0: string, arg1: ClassNode): MixinCoprocessor$ProcessResult;
    registerAccessor(arg0: MixinInfo): void;
}