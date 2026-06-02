import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Layout } from '../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractManager$AbstractFactoryData } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager$AbstractFactoryData.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export abstract class AbstractDatabaseManager$AbstractFactoryData extends AbstractManager$AbstractFactoryData {
    constructor(bufferSize: number, layout: Layout<Serializable>)
    constructor(configuration: Configuration, bufferSize: number, layout: Layout<Serializable>)
    readonly bufferSize: number;
    readonly layout: Layout<Serializable>;
    getBufferSize(): number;
    getLayout(): Layout<Serializable>;
}