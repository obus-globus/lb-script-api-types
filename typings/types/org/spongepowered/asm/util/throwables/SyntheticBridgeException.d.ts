import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinContext } from '../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { MixinException } from '../../../../../org/spongepowered/asm/mixin/throwables/MixinException.d.ts'
import type { PrettyPrinter } from '../../../../../org/spongepowered/asm/util/PrettyPrinter.d.ts'
import type { SyntheticBridgeException$Problem } from '../../../../../org/spongepowered/asm/util/throwables/SyntheticBridgeException$Problem.d.ts'
export class SyntheticBridgeException extends MixinException {
    constructor(arg0: SyntheticBridgeException$Problem, arg1: string, arg2: string, arg3: number, arg4: AbstractInsnNode, arg5: AbstractInsnNode)
    // private a: AbstractInsnNode;
    // private b: AbstractInsnNode;
    // private desc: string;
    // private index: number;
    // private name: string;
    // private problem: SyntheticBridgeException$Problem;
    printAnalysis(arg0: IMixinContext, arg1: MethodNode, arg2: MethodNode): void;
    // private printMethod(arg0: PrettyPrinter, arg1: MethodNode, arg2: AbstractInsnNode): PrettyPrinter;
    // private printProblem(arg0: PrettyPrinter, arg1: IMixinContext, arg2: MethodNode, arg3: MethodNode): PrettyPrinter;
    // private printTypeComparison(arg0: PrettyPrinter, arg1: string, arg2: Type, arg3: Type): PrettyPrinter;
}