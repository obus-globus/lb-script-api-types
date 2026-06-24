import type { DatagramSocketManager$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { DatagramSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/DatagramSocketManager.d.ts'
import type { DatagramSocketManager$FactoryData } from '../../../../../../org/apache/logging/log4j/core/net/DatagramSocketManager$FactoryData.d.ts'
export class DatagramSocketManager$DatagramSocketManagerFactory extends Object implements ManagerFactory<DatagramSocketManager, DatagramSocketManager$FactoryData> {
    private constructor()
    constructor(arg0: DatagramSocketManager$1)
    createManager(name: string, data: DatagramSocketManager$FactoryData): DatagramSocketManager;
}