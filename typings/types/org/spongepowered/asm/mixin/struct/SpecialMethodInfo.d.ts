import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { AnnotatedMethodInfo } from '../../../../../org/spongepowered/asm/mixin/struct/AnnotatedMethodInfo.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { IAnnotatedElement } from '../../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
export class SpecialMethodInfo extends AnnotatedMethodInfo {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode)
    readonly classNode: ClassNode;
    readonly mixin: MixinTargetContext;
    getClassInfo(): ClassInfo;
    getClassNode(): ClassNode;
    getMethodName(): string;
    getTargetClassInfo(): ClassInfo;
    getTargetClassNode(): ClassNode;
}