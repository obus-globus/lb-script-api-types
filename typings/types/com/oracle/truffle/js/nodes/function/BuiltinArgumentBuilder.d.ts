import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BuiltinArgumentBuilder extends Object {
    static EMPTY_NODE_ARRAY: JavaScriptNode[];
    static builder(): BuiltinArgumentBuilder;
    constructor()
    // private fixedArgumentCount: number;
    // private hasFunction: boolean;
    // private hasThis: boolean;
    // private newTarget: boolean;
    // private varArgs: boolean;
    assertOrder(order: number): void;
    createArgumentNodes(context: JSContext): JavaScriptNode[];
    fixedArgs(fixedArgumentCount: number): BuiltinArgumentBuilder;
    function(): BuiltinArgumentBuilder;
    function(function_: boolean): BuiltinArgumentBuilder;
    functionOrNewTarget(newTarget: boolean): BuiltinArgumentBuilder;
    // private getTotalArgumentCount(): number;
    newTarget(): BuiltinArgumentBuilder;
    newTarget(newTarget: boolean): BuiltinArgumentBuilder;
    varArgs(): BuiltinArgumentBuilder;
    varArgs(varArgs: boolean): BuiltinArgumentBuilder;
    withThis(): BuiltinArgumentBuilder;
    withThis(hasThis: boolean): BuiltinArgumentBuilder;
}