import type { FunctionNode } from '../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { NodeFactory } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { DirectEvalContext } from '../../../../../com/oracle/truffle/js/parser/DirectEvalContext.d.ts'
import type { GraalJSTranslator } from '../../../../../com/oracle/truffle/js/parser/GraalJSTranslator.d.ts'
import type { Environment } from '../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSModuleData } from '../../../../../com/oracle/truffle/js/runtime/objects/JSModuleData.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JavaScriptTranslator extends GraalJSTranslator {
    static ARGUMENTS: string;
    static DIR__: string;
    static EMPTY_NODE_ARRAY: (Object | null)[];
    static FILE__: string;
    static IMPORT: string;
    static IMPORT_META: string;
    static LINE__: string;
    static SUPER_CALLED_TWICE: TruffleString;
    static UNSUPPORTED_REFERENCE_TO_SUPER: TruffleString;
    static translateEvalScript(paramfactory: NodeFactory, paramcontext: JSContext, paramsource: Source, paramisParentStrict: boolean, paramdirectEval: DirectEvalContext, paramactiveScriptOrModule: ScriptOrModule): ScriptNode;
    static translateFunction(paramfactory: NodeFactory, paramcontext: JSContext, paramenv: Environment, paramsource: Source, paramisParentStrict: boolean, paramrootNode: FunctionNode): ScriptNode;
    static translateFunction(paramfactory: NodeFactory, paramcontext: JSContext, paramenv: Environment, paramsource: Source, paramprologLength: number, paramisParentStrict: boolean, paramrootNode: FunctionNode): ScriptNode;
    static translateInlineScript(paramfactory: NodeFactory, paramcontext: JSContext, paramenv: Environment, paramsource: Source, paramisParentStrict: boolean, paramactiveScriptOrModule: ScriptOrModule): ScriptNode;
    static translateModule(paramfactory: NodeFactory, paramcontext: JSContext, paramsource: Source): JSModuleData;
    static translateScript(paramfactory: NodeFactory, paramcontext: JSContext, paramsource: Source, paramisParentStrict: boolean, paramprologue: string, paramepilogue: string): ScriptNode;
    static translateScript(paramfactory: NodeFactory, paramcontext: JSContext, paramsource: Source, paramisParentStrict: boolean, paramprologue: string, paramepilogue: string, paramargumentNames: string[]): ScriptNode;
    private constructor(lc: LexicalContext, factory: NodeFactory, context: JSContext, source: Source, argumentNames: string[], prologLength: number, environment: Environment, isParentStrict: boolean, scriptOrModule: ScriptOrModule)
    private constructor(factory: NodeFactory, context: JSContext, source: Source, prologLength: number, environment: Environment, isParentStrict: boolean, scriptOrModule: ScriptOrModule)
    newTranslator(env: Environment, savedLC: LexicalContext): GraalJSTranslator;
    // private translateModule(functionNode: FunctionNode, moduleData: JSModuleData): JSModuleData;
    // private translateScript(functionNode: FunctionNode): ScriptNode;
}