import type { ISelectorContext } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { DynamicSelectorDesc } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/dynamic/DynamicSelectorDesc.d.ts'
import type { IResolvedDescriptor } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/dynamic/IResolvedDescriptor.d.ts'
import type { IAnnotationHandle } from '../../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class DynamicSelectorDesc$Next extends DynamicSelectorDesc {
    static of(paramarg0: IResolvedDescriptor): DynamicSelectorDesc;
    static of(paramarg0: IAnnotationHandle, paramarg1: ISelectorContext): DynamicSelectorDesc;
    static parse(paramarg0: string, paramarg1: ISelectorContext): DynamicSelectorDesc;
    static parse(paramarg0: IAnnotationHandle, paramarg1: ISelectorContext): DynamicSelectorDesc;
    static resolve(paramarg0: ISelectorContext): DynamicSelectorDesc;
    constructor(null_: DynamicSelectorDesc$Next, arg1: number, arg2: IResolvedDescriptor)
    // private index: number;
    next(): ITargetSelector;
}