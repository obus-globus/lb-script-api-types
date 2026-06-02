import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ISelectorContext } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMessageSink } from '../../../../../org/spongepowered/asm/util/IMessageSink.d.ts'
export interface IInjectionPointContext extends Object, ISelectorContext, IMessageSink{
    getAnnotationNode(): AnnotationNode;
    getMethod(): MethodNode;
}