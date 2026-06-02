import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
export class ParseTreeProperty<V extends Object | number | string | boolean> extends Object {
    constructor()
    // private annotations: Map<ParseTree, V>;
    get(arg0: ParseTree): V;
    put(arg0: ParseTree, arg1: V): void;
    removeFrom(arg0: ParseTree): V;
}