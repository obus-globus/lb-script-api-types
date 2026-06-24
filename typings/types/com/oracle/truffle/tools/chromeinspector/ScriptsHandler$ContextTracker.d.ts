import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { ContextsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { ScriptsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ScriptsHandler$ContextTracker extends Object implements ContextsListener {
    private constructor(null_: ScriptsHandler)
    onContextClosed(context: TruffleContext): void;
    onContextCreated(context: TruffleContext): void;
    onContextResetLimits(context: TruffleContext): void;
    onLanguageContextCreate(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextCreateFailed(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextCreated(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextDisposed(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextFinalized(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextInitialize(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextInitializeFailed(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextInitialized(context: TruffleContext, language: LanguageInfo): void;
}