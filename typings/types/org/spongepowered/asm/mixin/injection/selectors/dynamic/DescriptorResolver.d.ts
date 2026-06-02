import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IResolvedDescriptor } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/dynamic/IResolvedDescriptor.d.ts'
import type { IAnnotationHandle } from '../../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class DescriptorResolver extends Object {
    static PRINT_ID: string;
    static resolve(paramarg0: string, paramarg1: ISelectorContext): IResolvedDescriptor;
    static resolve(paramarg0: IAnnotationHandle, paramarg1: ISelectorContext): IResolvedDescriptor;
    private constructor()
}