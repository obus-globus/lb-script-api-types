import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelectorByName } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { MatchResult } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/MatchResult.d.ts'
export interface ITargetSelectorConstructor extends Object, ITargetSelectorByName{
    attach(arg0: ISelectorContext): ITargetSelector;
    getDesc(): string;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    getName(): string;
    getOwner(): string;
    matches(arg0: string, arg1: string, arg2: string): MatchResult;
    next(): ITargetSelector;
    toCtorDesc(): string;
    toCtorType(): string;
    toDescriptor(): string;
    validate(): ITargetSelector;
}