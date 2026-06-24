import type { InsnExpander } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander.d.ts'
import type { InsnExpander$InsnComponent } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander$InsnComponent.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionInfo } from '../../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class InsnExpander$Expansion extends Object {
    constructor(null_: InsnExpander, arg1: AbstractInsnNode)
    compound: AbstractInsnNode;
    // private expanded: boolean;
    // private expandedInsns: Map<InsnExpander$InsnComponent, AbstractInsnNode>;
    // private expansionSteps: Map<InsnExpander$InsnComponent, (param0: InjectionNodes$InjectionNode) => void[]>;
    // private interests: Map<InjectionInfo, InsnExpander$InsnComponent>;
    addExpansionStep(arg0: InsnExpander$InsnComponent, arg1: (param0: InjectionNodes$InjectionNode) => void): void;
    decorate(arg0: InjectionInfo, arg1: string, arg2: Object): void;
    decorateInjectorSpecific(arg0: InjectionInfo, arg1: string, arg2: Object): void;
    doExpansion(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    getTargetInsn(arg0: InjectionInfo): AbstractInsnNode;
    registerInsn(arg0: InsnExpander$InsnComponent, arg1: AbstractInsnNode): AbstractInsnNode;
    registerInterest(arg0: InjectionInfo, arg1: InsnExpander$InsnComponent): void;
    registeredInterests(): InsnExpander$InsnComponent[];
}