import type { InjectorWrapperImpl } from '../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MixinTargetContext } from '../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
export interface InjectorWrapperImpl$Factory extends Object{
    create(arg0: InjectionInfo, arg1: MixinTargetContext, arg2: MethodNode, arg3: AnnotationNode): InjectorWrapperImpl;
}