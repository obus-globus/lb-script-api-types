import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export abstract class AbstractManager$AbstractFactoryData extends Object {
    constructor(configuration: Configuration)
    readonly configuration: Configuration;
    getConfiguration(): Configuration;
}