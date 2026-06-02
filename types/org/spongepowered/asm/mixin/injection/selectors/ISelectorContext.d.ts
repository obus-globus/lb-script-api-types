import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IAnnotationHandle } from '../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export interface ISelectorContext extends Object{
    getAnnotation(): IAnnotationHandle;
    getElementDescription(): string;
    getMethod(): Object;
    getMixin(): IMixinContext;
    getParent(): ISelectorContext;
    getSelectorAnnotation(): IAnnotationHandle;
    getSelectorCoordinate(arg0: boolean): string;
    remap(arg0: string): string;
}