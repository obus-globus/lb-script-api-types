import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ScriptComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultScriptComponentBuilder extends DefaultComponentAndConfigurationBuilder<ScriptComponentBuilder> implements ScriptComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, language: string, text: string)
}