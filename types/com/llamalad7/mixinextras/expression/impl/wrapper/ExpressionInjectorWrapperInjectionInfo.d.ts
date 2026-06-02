import type { WrapperInjectionInfo } from '../../../../../../com/llamalad7/mixinextras/wrapper/WrapperInjectionInfo.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MixinTargetContext } from '../../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { IAnnotatedElement } from '../../../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
export class ExpressionInjectorWrapperInjectionInfo extends WrapperInjectionInfo {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    static getInjectorAnnotation(paramarg0: IMixinInfo, paramarg1: MethodNode): AnnotationNode;
    static getInjectorPrefix(paramarg0: AnnotationNode): string;
    static getRegisteredAnnotations(): (Object | null)[];
    static parse(paramarg0: MixinTargetContext, paramarg1: MethodNode): InjectionInfo;
    static register(paramarg0: Class<Object>): void;
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode)
}