import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { InsnExpander$Expansion } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander$Expansion.d.ts'
import type { InsnExpander$InsnComponent } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander$InsnComponent.d.ts'
import type { FlowPostProcessor } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionInfo } from '../../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export abstract class InsnExpander extends Object implements FlowPostProcessor {
    static addExpansionStep(paramarg0: FlowValue, paramarg1: (param0: InjectionNodes$InjectionNode) => void): void;
    static doExpansion(paramarg0: InjectionNodes$InjectionNode, paramarg1: AbstractInsnNode[], paramarg2: InjectionInfo): InjectionNodes$InjectionNode;
    static getRepresentative(paramarg0: FlowValue): AbstractInsnNode;
    static hasExpansion(paramarg0: FlowValue): boolean;
    static prepareExpansion(paramarg0: FlowValue, paramarg1: AbstractInsnNode[], paramarg2: InjectionInfo, paramarg3: ExpressionContext): InsnExpander$Expansion;
    constructor()
    // private expansions: Map<AbstractInsnNode, InsnExpander$Expansion>;
    expand(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: InsnExpander$Expansion): void;
    expandInsn(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, ...arg2: AbstractInsnNode[]): void;
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
    registerComponent(arg0: FlowValue, arg1: InsnExpander$InsnComponent, arg2: AbstractInsnNode): void;
}