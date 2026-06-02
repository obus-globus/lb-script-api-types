import type { Filer } from '../../../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../../../javax/annotation/processing/Messager.d.ts'
import type { ObfuscationEnvironment } from '../../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
import type { ObfuscationType } from '../../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMappingProvider } from '../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingProvider.d.ts'
import type { IMappingWriter } from '../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingWriter.d.ts'
export class ObfuscationEnvironmentMCP extends ObfuscationEnvironment {
    constructor(arg0: ObfuscationType)
    getMappingProvider(arg0: Messager, arg1: Filer): IMappingProvider;
    getMappingWriter(arg0: Messager, arg1: Filer): IMappingWriter;
}