import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
export interface ITargetSelectorDynamic extends Object, ITargetSelector{
    attach(arg0: ISelectorContext): ITargetSelector;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    next(): ITargetSelector;
    validate(): ITargetSelector;
}