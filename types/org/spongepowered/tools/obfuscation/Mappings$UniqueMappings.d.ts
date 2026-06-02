import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMapping } from '../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { MappingField } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMappingConsumer } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
export class Mappings$UniqueMappings extends Object implements IMappingConsumer {
    constructor(arg0: IMappingConsumer)
    // private fields: Map<ObfuscationType, Map<MappingField, MappingField>>;
    // private mappings: IMappingConsumer;
    // private methods: Map<ObfuscationType, Map<MappingMethod, MappingMethod>>;
    addFieldMapping(arg0: ObfuscationType, arg1: MappingField, arg2: MappingField): void;
    addMethodMapping(arg0: ObfuscationType, arg1: MappingMethod, arg2: MappingMethod): void;
    // private checkForExistingMapping<TMapping extends IMapping<TMapping>>(arg0: ObfuscationType, arg1: TMapping, arg2: TMapping, arg3: Map<ObfuscationType, Map<TMapping, TMapping>>): boolean;
    clear(): void;
    clearMaps(): void;
    getFieldMappings(arg0: ObfuscationType): MappingField[];
    getMethodMappings(arg0: ObfuscationType): MappingMethod[];
}