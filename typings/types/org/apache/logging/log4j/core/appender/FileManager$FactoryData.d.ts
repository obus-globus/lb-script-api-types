import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { ConfigurationFactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/ConfigurationFactoryData.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export class FileManager$FactoryData extends ConfigurationFactoryData {
    constructor(append: boolean, locking: boolean, bufferedIo: boolean, bufferSize: number, createOnDemand: boolean, advertiseURI: string, layout: Layout<Serializable>, filePermissions: string, fileOwner: string, fileGroup: string, configuration: Configuration)
    // private advertiseURI: string;
    // private append: boolean;
    // private bufferSize: number;
    // private bufferedIo: boolean;
    // private createOnDemand: boolean;
    // private fileGroup: string;
    // private fileOwner: string;
    // private filePermissions: string;
    // private layout: Layout<Serializable>;
    // private locking: boolean;
}