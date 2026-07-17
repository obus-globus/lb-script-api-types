import type { LateApplyingInjectorInfo } from '../../../../com/llamalad7/mixinextras/injector/LateApplyingInjectorInfo.d.ts'
import type { MixinExtrasInjectionInfo } from '../../../../com/llamalad7/mixinextras/injector/MixinExtrasInjectionInfo.d.ts'
import type { InjectorWrapperImpl } from '../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl.d.ts'
import type { InjectorWrapperImpl$Factory } from '../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl$Factory.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { Injector } from '../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { MixinTargetContext } from '../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { IAnnotatedElement } from '../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
export abstract class WrapperInjectionInfo extends MixinExtrasInjectionInfo implements LateApplyingInjectorInfo {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    static getInjectorAnnotation(paramarg0: IMixinInfo, paramarg1: MethodNode): AnnotationNode;
    static getInjectorPrefix(paramarg0: AnnotationNode): string;
    static getRegisteredAnnotations(): Class<Annotation>[];
    static parse(paramarg0: MixinTargetContext, paramarg1: MethodNode): InjectionInfo;
    static register(paramarg0: Class<InjectionInfo>): void;
    constructor(arg0: (param0: InjectionInfo, param1: MixinTargetContext, param2: MethodNode, param3: AnnotationNode) => InjectorWrapperImpl, arg1: MixinTargetContext, arg2: MethodNode, arg3: AnnotationNode)
    readonly delegate: InjectionInfo;
    // private impl: InjectorWrapperImpl;
    // private lateApply: boolean;
    addCallbackInvocation(arg0: MethodNode): void;
    // private checkDelegate(): void;
    getDelegate(): InjectionInfo;
    getLateInjectionType(): string;
    getOrder(): number;
    getSelectedTargets(): AbstractInsnNode[][];
    getTargetMap(): Map<AbstractInsnNode[], InjectionNodes$InjectionNode[]>;
    inject(): void;
    isValid(): boolean;
    lateApply(): void;
    lateInject(): void;
    latePostInject(): void;
    parseInjector(arg0: AnnotationNode): Injector;
    postInject(): void;
    preInject(): void;
    prepare(): void;
    readAnnotation(): void;
    wrap(arg0: LateApplyingInjectorInfo): void;
}