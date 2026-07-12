import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IInjectionPointContext } from '../../../../../org/spongepowered/asm/mixin/injection/IInjectionPointContext.d.ts'
import type { ISelectorContext } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IAnnotatedElement } from '../../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class AnnotatedMethodInfo extends Object implements IInjectionPointContext {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    constructor(arg0: IMixinContext, arg1: MethodNode, arg2: AnnotationNode)
    readonly annotation: AnnotationNode;
    // private annotationType: string;
    // private context: IMixinContext;
    readonly method: MethodNode;
    readonly methodName: string;
    addMessage(arg0: string, ...arg1: Object[]): void;
    getAnnotation(): IAnnotationHandle;
    getAnnotationNode(): AnnotationNode;
    getElementDescription(): string;
    getMethod(): MethodNode;
    getMethodName(): string;
    getMixin(): IMixinContext;
    getParent(): ISelectorContext;
    getSelectorAnnotation(): IAnnotationHandle;
    getSelectorCoordinate(arg0: boolean): string;
    remap(arg0: string): string;
}