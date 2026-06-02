import type { InjectorWrapperImpl } from '../../../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MixinTargetContext } from '../../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
export class ExpressionInjectorWrapperImpl extends InjectorWrapperImpl {
    constructor(arg0: InjectionInfo, arg1: MixinTargetContext, arg2: MethodNode, arg3: AnnotationNode)
    // private delegate: InjectionInfo;
    // private handler: MethodNode;
    // private targetContext: MixinTargetContext;
    getDelegate(): InjectionInfo;
    getHandler(): MethodNode;
    prepare(): void;
}