import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationAware } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationAware.d.ts'
import type { AbstractLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractLookup.d.ts'
export abstract class AbstractConfigurationAwareLookup extends AbstractLookup implements ConfigurationAware {
    static CATEGORY: string;
    constructor()
    configuration: Configuration;
    setConfiguration(configuration: Configuration): void;
}