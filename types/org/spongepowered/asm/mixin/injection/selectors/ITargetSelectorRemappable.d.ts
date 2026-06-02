import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ITargetSelectorByName } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { IMapping } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { MappingField } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
export interface ITargetSelectorRemappable extends Object, ITargetSelectorByName{
    asFieldMapping(): MappingField;
    asMapping(): IMapping<Object>;
    asMethodMapping(): MappingMethod;
    isClassInitialiser(): boolean;
    isConstructor(): boolean;
    isField(): boolean;
    isFullyQualified(): boolean;
    isInitialiser(): boolean;
    move(arg0: string): ITargetSelectorRemappable;
    remapUsing(arg0: MappingMethod, arg1: boolean): ITargetSelectorRemappable;
    transform(arg0: string): ITargetSelectorRemappable;
}