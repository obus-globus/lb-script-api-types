import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { SugarParameter } from '../../../../../com/llamalad7/mixinextras/sugar/impl/SugarParameter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export abstract class SugarApplicator extends Object {
    constructor(arg0: InjectionInfo, arg1: SugarParameter)
    // private info: InjectionInfo;
    // private mixin: IMixinInfo;
    // private paramGeneric: Type;
    // private paramIndex: number;
    // private paramLvtIndex: number;
    // private paramType: Type;
    // private sugar: AnnotationNode;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension): void;
    postProcessingPriority(): number;
    prepare(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    validate(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
}