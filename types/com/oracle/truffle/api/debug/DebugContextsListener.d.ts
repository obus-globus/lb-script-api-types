import type { DebugContext } from '../../../../../com/oracle/truffle/api/debug/DebugContext.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DebugContextsListener extends Object{
    contextClosed(context: DebugContext): void;
    contextCreated(context: DebugContext): void;
    languageContextCreated(context: DebugContext, language: LanguageInfo): void;
    languageContextDisposed(context: DebugContext, language: LanguageInfo): void;
    languageContextFinalized(context: DebugContext, language: LanguageInfo): void;
    languageContextInitialized(context: DebugContext, language: LanguageInfo): void;
}