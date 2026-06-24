import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { PolyglotContextConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotLanguageContext$Lazy extends Object {
    constructor(null_: PolyglotLanguageContext, languageInstance: PolyglotLanguageInstance, config: PolyglotContextConfig)
    // private accessibleInternalLanguages: { [key: string]: LanguageInfo };
    // private accessiblePublicLanguages: { [key: string]: LanguageInfo };
    // private internalFileSystemContext: Object;
    // private languageInstance: PolyglotLanguageInstance;
    // private multipleThreadsInitialized: boolean;
    // private ownedAlivePolyglotThreads: Thread[];
    // private polyglotGuestBindings: Object;
    // private publicFileSystemContext: Object;
    // private uncaughtExceptionHandler: (param0: Thread, param1: Throwable) => void;
    // private addDependentLanguages(engine: PolyglotEngineImpl, resolvedLanguages: { [key: string]: LanguageInfo }, currentLanguage: PolyglotLanguage): void;
    // private assertPermissionsConsistent(resolvedLanguages: { [key: string]: LanguageInfo }, thisLanguage: PolyglotLanguage, config: PolyglotContextConfig): boolean;
    computeAccessPermissions(config: PolyglotContextConfig): void;
    // private computeAccessibleLanguages(config: PolyglotContextConfig, internal: boolean): { [key: string]: LanguageInfo };
}