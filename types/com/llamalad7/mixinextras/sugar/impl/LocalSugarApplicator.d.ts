import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { SugarApplicator } from '../../../../../com/llamalad7/mixinextras/sugar/impl/SugarApplicator.d.ts'
import type { SugarParameter } from '../../../../../com/llamalad7/mixinextras/sugar/impl/SugarParameter.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class LocalSugarApplicator extends SugarApplicator {
    constructor(arg0: InjectionInfo, arg1: SugarParameter)
    // private isArgsOnly: boolean;
    // private isMutable: boolean;
    // private targetLocalType: Type;
    // private getOrCreateRef(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: number, arg3: string, arg4: StackExtension): number;
    // private initAndLoadLocalRef(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: number, arg3: StackExtension): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension): void;
    postProcessingPriority(): number;
    prepare(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    validate(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
}