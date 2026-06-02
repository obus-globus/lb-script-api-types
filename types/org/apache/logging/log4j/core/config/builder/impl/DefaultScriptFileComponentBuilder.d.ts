import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ScriptFileComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptFileComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultScriptFileComponentBuilder extends DefaultComponentAndConfigurationBuilder<ScriptFileComponentBuilder> implements ScriptFileComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, path: string)
    addCharset(charset: string): DefaultScriptFileComponentBuilder;
    addIsWatched(isWatched: boolean): DefaultScriptFileComponentBuilder;
    addIsWatched(isWatched: string): DefaultScriptFileComponentBuilder;
    addLanguage(language: string): DefaultScriptFileComponentBuilder;
}