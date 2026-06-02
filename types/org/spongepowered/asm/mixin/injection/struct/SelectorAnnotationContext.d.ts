import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IAnnotationHandle } from '../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class SelectorAnnotationContext extends Object implements ISelectorContext {
    constructor(arg0: ISelectorContext, arg1: IAnnotationHandle, arg2: string)
    readonly parent: ISelectorContext;
    readonly selectorAnnotation: IAnnotationHandle;
    // private selectorCoordinate: string;
    getAnnotation(): IAnnotationHandle;
    getElementDescription(): string;
    getMethod(): Object;
    getMixin(): IMixinContext;
    getParent(): ISelectorContext;
    getSelectorAnnotation(): IAnnotationHandle;
    getSelectorCoordinate(arg0: boolean): string;
    remap(arg0: string): string;
}