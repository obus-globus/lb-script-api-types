import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ISelectorContext } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IMessageSink } from '../../../../../org/spongepowered/asm/util/IMessageSink.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export interface IInjectionPointContext extends Object, ISelectorContext, IMessageSink{
    getAnnotation(): IAnnotationHandle;
    getAnnotationNode(): AnnotationNode;
    getElementDescription(): string;
    getMethod(): MethodNode;
    getMixin(): IMixinContext;
    getParent(): ISelectorContext;
    getSelectorAnnotation(): IAnnotationHandle;
    getSelectorCoordinate(arg0: boolean): string;
    remap(arg0: string): string;
}