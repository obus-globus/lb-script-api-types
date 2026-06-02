import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { MemoryMappedFileManager } from '../../../../../../org/apache/logging/log4j/core/appender/MemoryMappedFileManager.d.ts'
import type { MemoryMappedFileManager$FactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/MemoryMappedFileManager$FactoryData.d.ts'
export class MemoryMappedFileManager$MemoryMappedFileManagerFactory extends Object implements ManagerFactory<MemoryMappedFileManager, MemoryMappedFileManager$FactoryData> {
    private constructor()
    createManager(name: string, data: MemoryMappedFileManager$FactoryData): MemoryMappedFileManager;
}