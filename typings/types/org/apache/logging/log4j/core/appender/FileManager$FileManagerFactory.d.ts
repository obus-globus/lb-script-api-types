import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FileManager } from '../../../../../../org/apache/logging/log4j/core/appender/FileManager.d.ts'
import type { FileManager$FactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/FileManager$FactoryData.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
export class FileManager$FileManagerFactory extends Object implements ManagerFactory<FileManager, FileManager$FactoryData> {
    private constructor()
    createManager(name: string, data: FileManager$FactoryData): FileManager;
}