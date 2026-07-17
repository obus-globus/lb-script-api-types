import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$Env } from '../../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleLanguage$InlineParsingRequest } from '../../../../../com/oracle/truffle/api/TruffleLanguage$InlineParsingRequest.d.ts'
import type { TruffleLanguage$ParsingRequest } from '../../../../../com/oracle/truffle/api/TruffleLanguage$ParsingRequest.d.ts'
import type { ExecutableNode } from '../../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
import type { Context } from '../../../../../org/graalvm/polyglot/Context.d.ts'
export class JavaScriptLanguage extends TruffleLanguage<JSRealm> {
    static APPLICATION_MIME_TYPE: string;
    static BYTES_MIME_TYPE: string;
    static ID: string;
    static IMPLEMENTATION_NAME: string;
    static INTERNAL_SOURCE_URL_PREFIX: string;
    static JSON_MIME_TYPE: string;
    static JSON_SOURCE_NAME_SUFFIX: string;
    static MODULE_MIME_TYPE: string;
    static MODULE_SOURCE_NAME_SUFFIX: string;
    static NAME: string;
    static NODE_ENV_PARSE_TOKEN: string;
    static OPTION_DESCRIPTORS: OptionDescriptor[];
    static SCRIPT_SOURCE_NAME_SUFFIX: string;
    static TEXT_MIME_TYPE: string;
    static WASM_LANGUAGE_ID: string;
    static WASM_MIME_TYPE: string;
    static WASM_SOURCE_NAME_SUFFIX: string;
    static get(paramnode: Node): JavaScriptLanguage;
    static getCurrentEnv(): TruffleLanguage$Env;
    static getCurrentJSRealm(): JSRealm;
    static getCurrentLanguage(): JavaScriptLanguage;
    static getJSContext(paramcontext: Context): JSContext;
    static getJSRealm(paramcontext: Context): JSRealm;
    static getParsedProgramCallTarget(paramrootNode: RootNode): CallTarget;
    constructor()
    // private languageContext: JSContext;
    readonly multiContext: boolean;
    readonly promiseJobsQueueEmptyAssumption: Assumption;
    // private realmCount: number;
    areOptionsCompatible(firstOptions: OptionValues, newOptions: OptionValues): boolean;
    bindMemberFunctions(): boolean;
    createContext(env: TruffleLanguage$Env): JSRealm;
    disposeContext(realm: JSRealm): void;
    finalizeContext(realm: JSRealm): void;
    getAsyncStackDepth(): number;
    getJSContext(): JSContext;
    getLanguageView(context: JSRealm, value: Object): Object;
    getOptionDescriptors(): OptionDescriptor[];
    getPromiseJobsQueueEmptyAssumption(): Assumption;
    getScope(context: JSRealm): Object;
    // private initLanguageContext(env: TruffleLanguage$Env): JSContext;
    initializeContext(realm: JSRealm): void;
    initializeMultipleContexts(): void;
    interopBoundaryEnter(realm: JSRealm): void;
    interopBoundaryExit(realm: JSRealm): void;
    isMultiContext(): boolean;
    isVisible(realm: JSRealm, value: Object): boolean;
    // private newJSContext(env: TruffleLanguage$Env): JSContext;
    parse(request: TruffleLanguage$InlineParsingRequest): ExecutableNode;
    parse(parsingRequest: TruffleLanguage$ParsingRequest): CallTarget;
    patchContext(realm: JSRealm, newEnv: TruffleLanguage$Env): boolean;
}