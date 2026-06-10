import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ITargetSelectorRemappable } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { MappingField } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { IMappingConsumer } from '../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
export interface IObfuscationEnvironment extends Object{
    getObfClass(arg0: string): string;
    getObfField(arg0: ITargetSelectorRemappable): MappingField;
    getObfField(arg0: MappingField): MappingField;
    getObfField(arg0: MappingField, arg1: boolean): MappingField;
    getObfMethod(arg0: ITargetSelectorRemappable): MappingMethod;
    getObfMethod(arg0: MappingMethod): MappingMethod;
    getObfMethod(arg0: MappingMethod, arg1: boolean): MappingMethod;
    remapDescriptor(arg0: string): string;
    remapDescriptor(arg0: ITargetSelectorRemappable): ITargetSelectorRemappable;
    writeMappings(arg0: IMappingConsumer[]): void;
}