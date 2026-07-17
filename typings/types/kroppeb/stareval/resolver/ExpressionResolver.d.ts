import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ExpressionElement } from '../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { ConstantExpression } from '../../../kroppeb/stareval/expression/ConstantExpression.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionResolver } from '../../../kroppeb/stareval/function/FunctionResolver.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
export class ExpressionResolver extends Object {
    constructor(arg0: FunctionResolver, arg1: (param0: string) => Type)
    constructor(arg0: FunctionResolver, arg1: (param0: string) => Type, arg2: boolean)
    // private enableDebugging: boolean;
    // private functionResolver: FunctionResolver;
    // private logs: string[];
    // private numbers: JavaMap<string, ConstantExpression>;
    // private variableTypeMap: (param0: string) => Type;
    clearLogs(): void;
    extractLogs(): string[];
    // private log(arg0: () => string): void;
    // private log(arg0: string): void;
    // private log(arg0: string, ...arg1: Object[]): void;
    // private resolveCallExpression(arg0: Type, arg1: string, arg2: ExpressionElement[], arg3: boolean, arg4: boolean): Expression;
    resolveCallExpressionInternal(arg0: Type, arg1: string, arg2: ExpressionElement[], arg3: boolean): Expression;
    resolveExpression(arg0: Type, arg1: ExpressionElement): Expression;
    // private resolveExpressionInternal(arg0: Type, arg1: ExpressionElement, arg2: boolean, arg3: boolean): Expression;
    // private resolveNumber(arg0: string): ConstantExpression;
}