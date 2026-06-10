import type { LateApplyingInjectorInfo } from '../../../../com/llamalad7/mixinextras/injector/LateApplyingInjectorInfo.d.ts'
import type { MixinExtrasInjectionInfo } from '../../../../com/llamalad7/mixinextras/injector/MixinExtrasInjectionInfo.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MixinTargetContext } from '../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { IAnnotatedElement } from '../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
export abstract class MixinExtrasLateInjectionInfo extends MixinExtrasInjectionInfo implements LateApplyingInjectorInfo {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    static getInjectorAnnotation(paramarg0: IMixinInfo, paramarg1: MethodNode): AnnotationNode;
    static getInjectorPrefix(paramarg0: AnnotationNode): string;
    static getRegisteredAnnotations(): Class<Annotation>[];
    static parse(paramarg0: MixinTargetContext, paramarg1: MethodNode): InjectionInfo;
    static register(paramarg0: Class<InjectionInfo>): void;
    static wrap(paramarg0: Object, paramarg1: LateApplyingInjectorInfo): boolean;
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode)
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode, arg3: string)
    // private hasInjectStarted: boolean;
    // private injectionInfoToQueue: LateApplyingInjectorInfo;
    addCallbackInvocation(arg0: MethodNode): void;
    inject(): void;
    lateApply(): void;
    lateInject(): void;
    latePostInject(): void;
    postInject(): void;
    wrap(arg0: LateApplyingInjectorInfo): void;
}