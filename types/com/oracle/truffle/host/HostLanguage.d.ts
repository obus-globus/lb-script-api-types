import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleLanguage$ParsingRequest } from '../../../../com/oracle/truffle/api/TruffleLanguage$ParsingRequest.d.ts'
import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostLanguageService } from '../../../../com/oracle/truffle/host/HostLanguageService.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
export class HostLanguage extends TruffleLanguage<HostContext> {
    constructor(polyglot: AbstractPolyglotImpl, hostAccess: AbstractPolyglotImpl$AbstractHostAccess)
    // private access: AbstractPolyglotImpl$AbstractHostAccess;
    // private api: AbstractPolyglotImpl$APIAccess;
    // private byteSequenceClass: Class<Object>;
    // private hostClassCache: HostClassCache;
    // private methodScopingEnabled: boolean;
    // private polyglot: AbstractPolyglotImpl;
    // private polyglotExceptionClass: Class<Object>;
    // private service: HostLanguageService;
    // private valueClass: Class<Object>;
    createContext(env: TruffleLanguage$Env): HostContext;
    disposeContext(context: HostContext): void;
    getLanguageView(hostContext: HostContext, value: Object): Object;
    getScope(context: HostContext): Object;
    initializeHostAccess(hostAccess: Object): void;
    isThreadAccessAllowed(thread: Thread, singleThreaded: boolean): boolean;
    parse(request: TruffleLanguage$ParsingRequest): CallTarget;
    patchContext(context: HostContext, newEnv: TruffleLanguage$Env): boolean;
    // private unwrapIfScoped(obj: Object): Object;
}