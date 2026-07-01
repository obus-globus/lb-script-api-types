import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { ElementNode } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ISelectorContext } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelector$Configure } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector$Configure.d.ts'
import type { ITargetSelectorByName } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { ITargetSelectorDynamic } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorDynamic.d.ts'
import type { InvalidSelectorException } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/InvalidSelectorException.d.ts'
import type { MatchResult } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/MatchResult.d.ts'
import type { IResolvedDescriptor } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/dynamic/IResolvedDescriptor.d.ts'
import type { Quantifier } from '../../../../../../../org/spongepowered/asm/util/Quantifier.d.ts'
import type { IAnnotationHandle } from '../../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class DynamicSelectorDesc extends Object implements ITargetSelectorByName, ITargetSelectorDynamic {
    static of(paramarg0: IResolvedDescriptor): DynamicSelectorDesc;
    static of(paramarg0: IAnnotationHandle, paramarg1: ISelectorContext): DynamicSelectorDesc;
    static parse(paramarg0: string, paramarg1: ISelectorContext): DynamicSelectorDesc;
    static parse(paramarg0: IAnnotationHandle, paramarg1: ISelectorContext): DynamicSelectorDesc;
    static resolve(paramarg0: ISelectorContext): DynamicSelectorDesc;
    constructor(arg0: InvalidSelectorException, arg1: string, arg2: Type, arg3: string, arg4: Type[], arg5: Type, arg6: Quantifier, arg7: IAnnotationHandle[], arg8: boolean)
    readonly args: Type[];
    // private disabled: boolean;
    readonly id: string;
    // private matches: Quantifier;
    // private methodDesc: string;
    readonly name: string;
    // private next: IAnnotationHandle[];
    readonly owner: Type;
    // private parseException: InvalidSelectorException;
    readonly returnType: Type;
    attach(arg0: ISelectorContext): ITargetSelector;
    configure(arg0: ITargetSelector$Configure, arg1: string[]): ITargetSelector;
    getArgs(): Type[];
    getDesc(): string;
    getId(): string;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    getName(): string;
    getOwner(): string;
    getReturnType(): Type;
    match<TNode extends unknown>(arg0: ElementNode<TNode>): MatchResult;
    matches(arg0: string, arg1: string, arg2: string): MatchResult;
    // private matches(arg0: string, arg1: string, arg2: string, arg3: string): MatchResult;
    next(): ITargetSelector;
    next(arg0: number): ITargetSelector;
    toDescriptor(): string;
    toString(): string;
    validate(): ITargetSelector;
}