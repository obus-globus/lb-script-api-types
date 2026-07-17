import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
export class ParseTreeProperty<V extends unknown> extends Object {
    constructor()
    // private annotations: JavaMap<ParseTree, V>;
    get(arg0: ParseTree): V;
    put(arg0: ParseTree, arg1: V): void;
    removeFrom(arg0: ParseTree): V;
}