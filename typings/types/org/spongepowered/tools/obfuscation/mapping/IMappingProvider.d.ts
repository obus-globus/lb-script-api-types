import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MappingField } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
export interface IMappingProvider extends Object{
    clear(): void;
    getClassMapping(arg0: string): string;
    getFieldMapping(arg0: MappingField): MappingField;
    getMethodMapping(arg0: MappingMethod): MappingMethod;
    getPackageMapping(arg0: string): string;
    isEmpty(): boolean;
    read(arg0: File): void;
}