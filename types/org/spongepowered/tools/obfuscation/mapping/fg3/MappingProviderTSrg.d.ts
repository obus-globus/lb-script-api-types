import type { File } from '../../../../../../java/io/File.d.ts'
import type { Filer } from '../../../../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../../../../javax/annotation/processing/Messager.d.ts'
import type { MappingField } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingProvider } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/common/MappingProvider.d.ts'
export class MappingProviderTSrg extends MappingProvider {
    constructor(arg0: Messager, arg1: Filer)
    // private inputMappings: string[];
    getFieldMapping(arg0: MappingField): MappingField;
    getInputMappings(): string[];
    read(arg0: File): void;
}