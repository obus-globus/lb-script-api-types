import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Expression extends Object {
    constructor(arg0: ExpressionSource)
    readonly src: ExpressionSource;
    capture(arg0: FlowValue, arg1: ExpressionContext): void;
    getSrc(): ExpressionSource;
    inputsMatch(arg0: FlowValue, arg1: ExpressionContext, ...arg2: Expression[]): boolean;
    inputsMatch(arg0: FlowValue, arg1: ExpressionContext, arg2: boolean, ...arg3: Expression[]): boolean;
    inputsMatch(arg0: number, arg1: FlowValue, arg2: ExpressionContext, ...arg3: Expression[]): boolean;
    inputsMatch(arg0: number, arg1: FlowValue, arg2: ExpressionContext, arg3: boolean, ...arg4: Expression[]): boolean;
    matches(arg0: FlowValue, arg1: ExpressionContext): boolean;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}