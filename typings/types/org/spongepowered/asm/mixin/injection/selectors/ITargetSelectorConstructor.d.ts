import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ITargetSelectorByName } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
export interface ITargetSelectorConstructor extends Object, ITargetSelectorByName{
    toCtorDesc(): string;
    toCtorType(): string;
}