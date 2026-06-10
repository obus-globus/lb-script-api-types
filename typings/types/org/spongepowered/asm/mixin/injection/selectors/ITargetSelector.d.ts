import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector$Configure } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector$Configure.d.ts'
import type { MatchResult } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/MatchResult.d.ts'
export interface ITargetSelector extends Object{
    attach(arg0: ISelectorContext): ITargetSelector;
    configure(arg0: ITargetSelector$Configure, arg1: string[]): ITargetSelector;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    match<TNode extends Object | number | string | boolean>(arg0: ElementNode<TNode>): MatchResult;
    next(): ITargetSelector;
    validate(): ITargetSelector;
}