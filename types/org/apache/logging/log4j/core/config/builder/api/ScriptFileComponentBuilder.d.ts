import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
export interface ScriptFileComponentBuilder extends Object, ComponentBuilder<ScriptFileComponentBuilder>{
    addCharset(charset: string): ScriptFileComponentBuilder;
    addIsWatched(isWatched: boolean): ScriptFileComponentBuilder;
    addIsWatched(isWatched: string): ScriptFileComponentBuilder;
    addLanguage(language: string): ScriptFileComponentBuilder;
}