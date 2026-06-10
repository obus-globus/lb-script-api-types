import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelector$Configure } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector$Configure.d.ts'
import type { MatchResult } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/MatchResult.d.ts'
export class MemberMatcher extends Object implements ITargetSelector {
    static parse(paramarg0: string, paramarg1: ISelectorContext): MemberMatcher;
    private constructor(arg0: Pattern[], arg1: Exception, arg2: string)
    // private input: string;
    // private parseException: Exception;
    // private patterns: Pattern[];
    attach(arg0: ISelectorContext): ITargetSelector;
    configure(arg0: ITargetSelector$Configure, arg1: string[]): ITargetSelector;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    match<TNode extends Object | number | string | boolean>(arg0: ElementNode<TNode>): MatchResult;
    // private matches(arg0: string[]): MatchResult;
    next(): ITargetSelector;
    toString(): string;
    validate(): ITargetSelector;
}