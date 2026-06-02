import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MappingField } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ObfuscationType } from '../../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
export interface IMappingWriter extends Object{
    write(arg0: string, arg1: ObfuscationType, arg2: MappingField[], arg3: MappingMethod[]): void;
}