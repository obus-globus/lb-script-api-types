import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { FlowPostProcessor } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { LMFInfo$Type } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/LMFInfo$Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../../../org/objectweb/asm/Handle.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodInsnNode } from '../../../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
export class LMFPostProcessor extends Object implements FlowPostProcessor {
    constructor(arg0: ClassNode)
    // private currentType: Type;
    // private getType(arg0: FlowValue, arg1: Handle): LMFInfo$Type;
    // private isGetClass(arg0: MethodInsnNode): boolean;
    // private isRequireNonNull(arg0: MethodInsnNode): boolean;
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
    // private transformReceiver(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
}