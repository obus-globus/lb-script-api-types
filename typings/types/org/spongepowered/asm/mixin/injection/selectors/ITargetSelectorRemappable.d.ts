import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { ITargetSelectorByName } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { MatchResult } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/MatchResult.d.ts'
import type { IMapping } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { MappingField } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
export interface ITargetSelectorRemappable extends Object, ITargetSelectorByName{
    asFieldMapping(): MappingField;
    asMapping(): IMapping<Object>;
    asMethodMapping(): MappingMethod;
    attach(arg0: ISelectorContext): ITargetSelector;
    getDesc(): string;
    getMaxMatchCount(): number;
    getMinMatchCount(): number;
    getName(): string;
    getOwner(): string;
    isClassInitialiser(): boolean;
    isConstructor(): boolean;
    isField(): boolean;
    isFullyQualified(): boolean;
    isInitialiser(): boolean;
    matches(arg0: string, arg1: string, arg2: string): MatchResult;
    move(arg0: string): ITargetSelectorRemappable;
    next(): ITargetSelector;
    remapUsing(arg0: MappingMethod, arg1: boolean): ITargetSelectorRemappable;
    toDescriptor(): string;
    transform(arg0: string): ITargetSelectorRemappable;
    validate(): ITargetSelector;
}