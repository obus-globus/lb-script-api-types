import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MappingField } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { Mappings$UniqueMappings } from '../../../../org/spongepowered/tools/obfuscation/Mappings$UniqueMappings.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMappingConsumer } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
export class Mappings extends Object implements IMappingConsumer {
    constructor()
    // private fieldMappings: JavaMap<ObfuscationType, MappingField[]>;
    // private methodMappings: JavaMap<ObfuscationType, MappingMethod[]>;
    // private unique: Mappings$UniqueMappings;
    addFieldMapping(arg0: ObfuscationType, arg1: MappingField, arg2: MappingField): void;
    addMethodMapping(arg0: ObfuscationType, arg1: MappingMethod, arg2: MappingMethod): void;
    asUnique(): IMappingConsumer;
    clear(): void;
    getFieldMappings(arg0: ObfuscationType): MappingField[];
    getMethodMappings(arg0: ObfuscationType): MappingMethod[];
    // private init(): void;
}