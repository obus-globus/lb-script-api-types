import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { Module$ImportPhase } from '../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { GraalJSEvaluator$GraphLoadingState } from '../../../../../com/oracle/truffle/js/parser/GraalJSEvaluator$GraphLoadingState.d.ts'
import type { JSParser } from '../../../../../com/oracle/truffle/js/parser/JSParser.d.ts'
import type { SnapshotProvider } from '../../../../../com/oracle/truffle/js/parser/SnapshotProvider.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSParserOptions } from '../../../../../com/oracle/truffle/js/runtime/JSParserOptions.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSPromiseObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { AbstractModuleRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { Completion } from '../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { CyclicModuleRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord.d.ts'
import type { JSModuleData } from '../../../../../com/oracle/truffle/js/runtime/objects/JSModuleData.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GraalJSEvaluator extends Object implements JSParser {
    static EVAL_AT_SOURCE_NAME_PREFIX: string;
    static EVAL_SOURCE_NAME: string;
    static FUNCTION_SOURCE_NAME: string;
    static MODULE_EVAL_SUFFIX: TruffleString;
    static MODULE_LINK_SUFFIX: TruffleString;
    static TS_EVAL_SOURCE_NAME: TruffleString;
    static internalParseForTiming(paramcontext: JSContext, paramsource: Source): () => ScriptNode;
    constructor()
    checkFunctionSyntax(context: JSContext, parserOptions: JSParserOptions, parameterList: string, body: string, generator: boolean, async: boolean, sourceName: string): void;
    // private continueModuleLoading(realm: JSRealm, state: GraalJSEvaluator$GraphLoadingState, phase: Module$ImportPhase, moduleCompletion: Completion): void;
    envParseModule(realm: JSRealm, source: Source): JSModuleData;
    evalCompile(context: JSContext, sourceCode: string, name: string): ScriptNode;
    // private fakeScriptForModule(context: JSContext, source: Source): ScriptNode;
    // private finishLoadingImportedModule(realm: JSRealm, referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, payload: Object, moduleCompletion: Completion): void;
    getDefaultNodeFactory(): Object;
    hostLoadImportedModule(realm: JSRealm, referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, hostDefined: Object, payload: Object): void;
    // private innerModuleEvaluation(realm: JSRealm, abstractModule: AbstractModuleRecord, stack: CyclicModuleRecord[], index0: number): number;
    // private innerModuleLinking(realm: JSRealm, abstractModule: AbstractModuleRecord, stack: CyclicModuleRecord[], index0: number): number;
    // private innerModuleLoading(realm: JSRealm, state: GraalJSEvaluator$GraphLoadingState, module: AbstractModuleRecord, recursiveLoad: boolean): void;
    loadRequestedModules(realm: JSRealm, moduleRecord: CyclicModuleRecord, hostDefined: Object): JSPromiseObject;
    moduleEvaluation(realm: JSRealm, moduleRecord: CyclicModuleRecord): JSPromiseObject;
    moduleLinking(realm: JSRealm, moduleRecord: CyclicModuleRecord): void;
    parseDate(realm: JSRealm, date: string, extraLenient: boolean): number[];
    parseDirectEval(context: JSContext, lastNode: Node, source: Source, evalEnv: Object): ScriptNode;
    parseEval(context: JSContext, lastNode: Node, source: Source, activeScriptOrModule: ScriptOrModule): ScriptNode;
    parseExpression(context: JSContext, sourceString: string): Expression;
    parseFunction(context: JSContext, parameterList: string, body: string, generatorFunction: boolean, asyncFunction: boolean, sourceName: string, activeScriptOrModule: ScriptOrModule): ScriptNode;
    parseInlineScript(context: JSContext, source: Source, lexicalContextFrame: MaterializedFrame, isStrict: boolean, locationNode: Node): JavaScriptNode;
    parseJSONModule(realm: JSRealm, source: Source): AbstractModuleRecord;
    parseModule(context: JSContext, source: Source): JSModuleData;
    parseScript(context: JSContext, source: Source): ScriptNode;
    parseScript(context: JSContext, source: Source, snapshotProvider: SnapshotProvider): ScriptNode;
    parseScript(context: JSContext, source: Source, binary: ByteBuffer): ScriptNode;
    parseScript(context: JSContext, source: Source, prolog: string, epilog: string, isStrict: boolean): ScriptNode;
    parseScript(context: JSContext, source: Source, prolog: string, epilog: string, isStrict: boolean, argumentNames: string[]): ScriptNode;
    parseScript(context: JSContext, sourceCode: string): ScriptNode;
    parseToJSON(context: JSContext, code: string, name: string, includeLoc: boolean): string;
    parseWasmModuleSource(realm: JSRealm, source: Source): AbstractModuleRecord;
}