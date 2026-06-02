import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Filer } from '../../../../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../../../../javax/annotation/processing/Messager.d.ts'
import type { MappingField } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ObfuscationType } from '../../../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMappingConsumer$MappingSet$Pair } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer$MappingSet$Pair.d.ts'
import type { MappingWriter } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/common/MappingWriter.d.ts'
export class MappingWriterSrg extends MappingWriter {
    constructor(arg0: Messager, arg1: Filer)
    formatFieldMapping(arg0: IMappingConsumer$MappingSet$Pair<MappingField>): string;
    formatMethodMapping(arg0: IMappingConsumer$MappingSet$Pair<MappingMethod>): string;
    openFileWriter(arg0: string, arg1: ObfuscationType): PrintWriter;
    write(arg0: string, arg1: ObfuscationType, arg2: MappingField[], arg3: MappingMethod[]): void;
    writeFieldMappings(arg0: PrintWriter, arg1: MappingField[]): void;
    writeHeader(arg0: PrintWriter): void;
    writeMethodMappings(arg0: PrintWriter, arg1: MappingMethod[]): void;
}