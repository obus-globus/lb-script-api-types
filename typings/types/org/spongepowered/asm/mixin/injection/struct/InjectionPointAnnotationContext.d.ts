import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IInjectionPointContext } from '../../../../../../org/spongepowered/asm/mixin/injection/IInjectionPointContext.d.ts'
import type { SelectorAnnotationContext } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/SelectorAnnotationContext.d.ts'
import type { IAnnotationHandle } from '../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class InjectionPointAnnotationContext extends SelectorAnnotationContext implements IInjectionPointContext {
    constructor(arg0: IInjectionPointContext, arg1: AnnotationNode, arg2: string)
    constructor(arg0: IInjectionPointContext, arg1: IAnnotationHandle, arg2: string)
    // private parentContext: IInjectionPointContext;
    addMessage(arg0: string, ...arg1: Object[]): void;
    getAnnotation(): IAnnotationHandle;
    getAnnotationNode(): AnnotationNode;
    getMethod(): MethodNode;
    toString(): string;
}