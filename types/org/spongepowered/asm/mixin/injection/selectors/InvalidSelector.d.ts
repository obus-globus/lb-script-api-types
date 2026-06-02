import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelector$Configure } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector$Configure.d.ts'
import type { MatchResult } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/MatchResult.d.ts'
export class InvalidSelector extends Object implements ITargetSelector {
    constructor(arg0: string)
    constructor(arg0: Throwable)
    constructor(arg0: Throwable, arg1: string)
    // private cause: Throwable;
    // private input: string;
    attach(arg0: ISelectorContext): ITargetSelector;
    configure(arg0: ITargetSelector$Configure, arg1: string[]): ITargetSelector;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    match(arg0: ElementNode<TNode>): MatchResult;
    next(): ITargetSelector;
    toString(): string;
    validate(): ITargetSelector;
}