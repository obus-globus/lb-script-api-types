import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { FunctionNode } from '../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSParserOptions } from '../../../../../com/oracle/truffle/js/runtime/JSParserOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GraalJSParserHelper extends Object {
    static COLON_MODULE: string;
    static checkFunctionSyntax(paramcontext: JSContext, paramparserOptions: JSParserOptions, paramparameterList: string, parambody: string, paramgenerator: boolean, paramasync: boolean, paramsourceName: string): void;
    static parseExpression(paramcontext: JSContext, paramtruffleSource: Source, paramparserOptions: JSParserOptions): Expression;
    static parseModule(paramcontext: JSContext, paramtruffleSource: Source, paramparserOptions: JSParserOptions): FunctionNode;
    static parseScript(paramcontext: JSContext, paramtruffleSource: Source, paramparserOptions: JSParserOptions): FunctionNode;
    static parseScript(paramcontext: JSContext, paramtruffleSource: Source, paramparserOptions: JSParserOptions, parameval: boolean, paramevalInFunction: boolean, paramevalScope: Scope, paramprologue: string, paramepilogue: string): FunctionNode;
    static parseScript(paramcontext: JSContext, paramtruffleSource: Source, paramparserOptions: JSParserOptions, parameval: boolean, paramevalInFunction: boolean, paramevalScope: Scope, paramprologue: string, paramepilogue: string, paramargumentNames: string[]): FunctionNode;
    static parseToJSON(paramcode: string, paramname: string, paramincludeLoc: boolean, paramcontext: JSContext): string;
    private constructor()
}