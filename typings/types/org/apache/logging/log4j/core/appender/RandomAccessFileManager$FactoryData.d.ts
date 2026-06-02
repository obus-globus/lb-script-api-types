import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { ConfigurationFactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/ConfigurationFactoryData.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export class RandomAccessFileManager$FactoryData extends ConfigurationFactoryData {
    constructor(append: boolean, immediateFlush: boolean, bufferSize: number, advertiseURI: string, layout: Layout<Serializable>, configuration: Configuration)
    // private advertiseURI: string;
    // private append: boolean;
    // private bufferSize: number;
    // private immediateFlush: boolean;
    // private layout: Layout<Serializable>;
}