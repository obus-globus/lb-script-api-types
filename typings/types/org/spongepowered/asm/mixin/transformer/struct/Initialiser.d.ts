import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { MixinTargetContext } from '../../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { InsnRange } from '../../../../../../org/spongepowered/asm/mixin/transformer/struct/InsnRange.d.ts'
export class Initialiser extends Object {
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: InsnRange)
    readonly ctor: MethodNode;
    readonly insns: AbstractInsnNode[];
    // private mixin: MixinTargetContext;
    getCtor(): MethodNode;
    getInsns(): AbstractInsnNode[];
    getMaxStack(): number;
    // private initInstructions(arg0: InsnRange): void;
    injectInto(arg0: (Object | null)[]): void;
    size(): number;
}