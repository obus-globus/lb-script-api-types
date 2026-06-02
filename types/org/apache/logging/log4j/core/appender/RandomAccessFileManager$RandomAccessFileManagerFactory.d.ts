import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { RandomAccessFileManager } from '../../../../../../org/apache/logging/log4j/core/appender/RandomAccessFileManager.d.ts'
import type { RandomAccessFileManager$FactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/RandomAccessFileManager$FactoryData.d.ts'
export class RandomAccessFileManager$RandomAccessFileManagerFactory extends Object implements ManagerFactory<RandomAccessFileManager, RandomAccessFileManager$FactoryData> {
    private constructor()
    createManager(name: string, data: RandomAccessFileManager$FactoryData): RandomAccessFileManager;
}