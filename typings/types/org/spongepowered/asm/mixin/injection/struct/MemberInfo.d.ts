import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelector$Configure } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector$Configure.d.ts'
import type { ITargetSelectorByName } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { ITargetSelectorConstructor } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorConstructor.d.ts'
import type { ITargetSelectorRemappable } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { MatchResult } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/MatchResult.d.ts'
import type { IMapping } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { MappingField } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { Quantifier } from '../../../../../../org/spongepowered/asm/util/Quantifier.d.ts'
export class MemberInfo extends Object implements ITargetSelectorConstructor, ITargetSelectorRemappable {
    static fromMapping(paramarg0: IMapping<Object>): MemberInfo;
    static parse(paramarg0: string, paramarg1: ISelectorContext): MemberInfo;
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: Quantifier)
    constructor(arg0: string, arg1: string, arg2: string, arg3: Quantifier, arg4: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: Quantifier, arg4: string, arg5: string)
    constructor(arg0: string, arg1: string, arg2: Quantifier)
    constructor(arg0: string, arg1: Quantifier)
    constructor(arg0: AbstractInsnNode)
    constructor(arg0: IMapping<Object>)
    readonly desc: string;
    // private forceField: boolean;
    // private input: string;
    // private matches: Quantifier;
    readonly name: string;
    readonly owner: string;
    // private tail: string;
    asFieldMapping(): MappingField;
    asMapping(): IMapping<Object>;
    asMethodMapping(): MappingMethod;
    attach(arg0: ISelectorContext): ITargetSelector;
    // private compareMatches(arg0: ITargetSelectorByName): boolean;
    configure(arg0: ITargetSelector$Configure, ...arg1: string[]): ITargetSelector;
    equals(arg0: Object | null): boolean;
    getDesc(): string;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    getName(): string;
    getOwner(): string;
    // private getReturnType(): string;
    hashCode(): number;
    isClassInitialiser(): boolean;
    isConstructor(): boolean;
    isField(): boolean;
    isFullyQualified(): boolean;
    isInitialiser(): boolean;
    match<TNode extends unknown>(arg0: ElementNode<TNode>): MatchResult;
    matches(arg0: string, arg1: string, arg2: string): MatchResult;
    move(arg0: string): ITargetSelectorRemappable;
    next(): ITargetSelector;
    remapUsing(arg0: MappingMethod, arg1: boolean): ITargetSelectorRemappable;
    toCtorDesc(): string;
    toCtorType(): string;
    toDescriptor(): string;
    toSrg(): string;
    toString(): string;
    transform(arg0: string): ITargetSelectorRemappable;
    validate(): MemberInfo;
}