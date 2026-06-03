import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Filer } from '../../../../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../../../../javax/annotation/processing/Messager.d.ts'
import type { MappingField } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ObfuscationType } from '../../../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMappingConsumer$MappingSet$Pair } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer$MappingSet$Pair.d.ts'
import type { MappingProviderTSrg } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/fg3/MappingProviderTSrg.d.ts'
import type { MappingWriterSrg } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/mcp/MappingWriterSrg.d.ts'
export class MappingWriterTSrg extends MappingWriterSrg {
    constructor(arg0: Messager, arg1: Filer, arg2: MappingProviderTSrg, arg3: boolean)
    // private mergeExisting: boolean;
    // private provider: MappingProviderTSrg;
    formatFieldMapping(arg0: IMappingConsumer$MappingSet$Pair<MappingField>): string;
    formatMethodMapping(arg0: IMappingConsumer$MappingSet$Pair<MappingMethod>): string;
    openFileWriter(arg0: string, arg1: string): PrintWriter;
    openFileWriter(arg0: string, arg1: ObfuscationType): PrintWriter;
    writeHeader(arg0: PrintWriter): void;
}