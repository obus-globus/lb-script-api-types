import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { AppenderSet } from '../../../../../../org/apache/logging/log4j/core/appender/AppenderSet.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class ScriptAppenderSelector$Builder extends Object implements Builder<Appender> {
    constructor()
    readonly appenderSet: AppenderSet;
    readonly configuration: Configuration;
    readonly name: string;
    readonly script: AbstractScript;
    build(): Appender;
    getAppenderSet(): AppenderSet;
    getConfiguration(): Configuration;
    getErrorPrefix(): string;
    getName(): string;
    getScript(): AbstractScript;
    isValid(): boolean;
    withAppenderNodeSet(appenderSet: AppenderSet): ScriptAppenderSelector$Builder;
    withConfiguration(configuration: Configuration): ScriptAppenderSelector$Builder;
    withName(name: string): ScriptAppenderSelector$Builder;
    withScript(script: AbstractScript): ScriptAppenderSelector$Builder;
}