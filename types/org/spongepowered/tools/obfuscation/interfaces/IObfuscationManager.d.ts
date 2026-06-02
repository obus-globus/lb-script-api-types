import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObfuscationEnvironment } from '../../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
import type { IObfuscationDataProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationDataProvider.d.ts'
import type { IReferenceManager } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IReferenceManager.d.ts'
import type { IMappingConsumer } from '../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
export interface IObfuscationManager extends Object{
    createMappingConsumer(): IMappingConsumer;
    getDataProvider(): IObfuscationDataProvider;
    getEnvironments(): ObfuscationEnvironment[];
    getReferenceManager(): IReferenceManager;
    init(): void;
    writeMappings(): void;
    writeReferences(): void;
}