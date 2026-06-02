import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSParserOptions } from '../../../../../com/oracle/truffle/js/runtime/JSParserOptions.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSPromiseObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { AbstractModuleRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { CyclicModuleRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord.d.ts'
import type { JSModuleData } from '../../../../../com/oracle/truffle/js/runtime/objects/JSModuleData.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Evaluator extends Object{
    checkFunctionSyntax(context: JSContext, parserOptions: JSParserOptions, parameterList: string, body: string, generator: boolean, async: boolean, sourceName: string): void;
    envParseModule(realm: JSRealm, source: Source): JSModuleData;
    evalCompile(context: JSContext, sourceCode: string, name: string): ScriptNode;
    getDefaultNodeFactory(): Object;
    hostLoadImportedModule(realm: JSRealm, referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, hostDefined: Object, payload: Object): void;
    loadRequestedModules(realm: JSRealm, moduleRecord: CyclicModuleRecord, hostDefined: Object): JSPromiseObject;
    moduleEvaluation(realm: JSRealm, moduleRecord: CyclicModuleRecord): JSPromiseObject;
    moduleLinking(realm: JSRealm, moduleRecord: CyclicModuleRecord): void;
    parseDate(realm: JSRealm, date: string, extraLenient: boolean): number[];
    parseDirectEval(context: JSContext, lastNode: Node, source: Source, currEnv: Object): ScriptNode;
    parseEval(context: JSContext, lastNode: Node, code: Source, activeScriptOrModule: ScriptOrModule): ScriptNode;
    parseExpression(context: JSContext, sourceString: string): Expression;
    parseFunction(context: JSContext, parameterList: string, body: string, generatorFunction: boolean, asyncFunction: boolean, sourceName: string, activeScriptOrModule: ScriptOrModule): ScriptNode;
    parseInlineScript(context: JSContext, source: Source, lexicalContextFrame: MaterializedFrame, isStrict: boolean, locationNode: Node): JavaScriptNode;
    parseJSONModule(realm: JSRealm, source: Source): AbstractModuleRecord;
    parseModule(context: JSContext, source: Source): JSModuleData;
    parseScript(context: JSContext, source: Source): ScriptNode;
    parseScript(context: JSContext, source: Source, prolog: string, epilog: string, isStrict: boolean): ScriptNode;
    parseScript(context: JSContext, source: Source, prolog: string, epilog: string, isStrict: boolean, argumentNames: string[]): ScriptNode;
    parseScript(context: JSContext, sourceString: string): ScriptNode;
    parseToJSON(context: JSContext, code: string, name: string, includeLoc: boolean): string;
    parseWasmModuleSource(realm: JSRealm, source: Source): AbstractModuleRecord;
}