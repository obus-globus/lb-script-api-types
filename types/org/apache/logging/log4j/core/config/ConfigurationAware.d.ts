import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export interface ConfigurationAware extends Object{
    setConfiguration(configuration: Configuration): void;
}