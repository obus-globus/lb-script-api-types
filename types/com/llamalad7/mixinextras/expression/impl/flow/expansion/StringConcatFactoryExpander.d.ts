import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { InsnExpander } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander.d.ts'
import type { InsnExpander$Expansion } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander$Expansion.d.ts'
import type { StringConcatFactoryExpander$ConcatPart } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/StringConcatFactoryExpander$ConcatPart.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionInfo } from '../../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class StringConcatFactoryExpander extends InsnExpander {
    static addExpansionStep(paramarg0: FlowValue, paramarg1: (param0: InjectionNodes$InjectionNode) => void): void;
    static doExpansion(paramarg0: InjectionNodes$InjectionNode, paramarg1: AbstractInsnNode[], paramarg2: InjectionInfo): InjectionNodes$InjectionNode;
    static getRepresentative(paramarg0: FlowValue): AbstractInsnNode;
    static hasExpansion(paramarg0: FlowValue): boolean;
    static prepareExpansion(paramarg0: FlowValue, paramarg1: AbstractInsnNode[], paramarg2: InjectionInfo, paramarg3: ExpressionContext): InsnExpander$Expansion;
    constructor()
    // private decorateConcat(arg0: FlowValue, arg1: FlowValue[], arg2: FlowValue): void;
    expand(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: InsnExpander$Expansion): void;
    // private isStringValueOf(arg0: AbstractInsnNode): boolean;
    // private makeAppendCall(arg0: Type): AbstractInsnNode;
    // private makeBuilderInit(): AbstractInsnNode;
    // private makeNewBuilder(): AbstractInsnNode;
    // private makeToStringCall(): AbstractInsnNode;
    // private parseConcat(arg0: AbstractInsnNode): StringConcatFactoryExpander$ConcatPart[];
    // private parseConcatWithConstants(arg0: Object[]): StringConcatFactoryExpander$ConcatPart[];
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
    // private storeArgs(arg0: AbstractInsnNode[], arg1: Type[], arg2: (param0: AbstractInsnNode) => void): number[];
    // private unwrapConcatArgument(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): FlowValue;
}