import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MappingField } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ObfuscationType } from '../../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
export interface IMappingConsumer extends Object{
    addFieldMapping(arg0: ObfuscationType, arg1: MappingField, arg2: MappingField): void;
    addMethodMapping(arg0: ObfuscationType, arg1: MappingMethod, arg2: MappingMethod): void;
    clear(): void;
    getFieldMappings(arg0: ObfuscationType): MappingField[];
    getMethodMappings(arg0: ObfuscationType): MappingMethod[];
}