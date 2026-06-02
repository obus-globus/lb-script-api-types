import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObfuscationEnvironment } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IObfuscationDataProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationDataProvider.d.ts'
import type { IObfuscationManager } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationManager.d.ts'
import type { IReferenceManager } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IReferenceManager.d.ts'
import type { IMappingConsumer } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
export class ObfuscationManager extends Object implements IObfuscationManager {
    constructor(arg0: IMixinAnnotationProcessor)
    // private ap: IMixinAnnotationProcessor;
    // private consumers: IMappingConsumer[];
    readonly environments: ObfuscationEnvironment[];
    // private initDone: boolean;
    // private obfs: IObfuscationDataProvider;
    // private refs: IReferenceManager;
    createMappingConsumer(): IMappingConsumer;
    getDataProvider(): IObfuscationDataProvider;
    getEnvironments(): ObfuscationEnvironment[];
    getReferenceManager(): IReferenceManager;
    init(): void;
    writeMappings(): void;
    writeReferences(): void;
}