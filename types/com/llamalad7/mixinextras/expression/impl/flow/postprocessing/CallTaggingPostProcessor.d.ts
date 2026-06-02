import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { FlowPostProcessor } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { MethodCallType } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/MethodCallType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class CallTaggingPostProcessor extends Object implements FlowPostProcessor {
    constructor(arg0: ClassNode, arg1: MethodNode)
    // private currentType: Type;
    // private isStatic: boolean;
    // private getType(arg0: FlowValue): MethodCallType;
    // private isLoadThis(arg0: FlowValue): boolean;
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
}