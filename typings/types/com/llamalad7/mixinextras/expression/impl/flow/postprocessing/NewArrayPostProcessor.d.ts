import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { FlowPostProcessor } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MethodNode } from '../../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class NewArrayPostProcessor extends Object implements FlowPostProcessor {
    constructor(arg0: MethodNode)
    // private insnIndexComparator: (param0: Object) => boolean;
    // private getCreationStores(arg0: FlowValue): FlowValue[];
    // private getIntConstant(arg0: FlowValue): number;
    // private isStore(arg0: FlowValue, arg1: FlowValue, arg2: number): boolean;
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
}