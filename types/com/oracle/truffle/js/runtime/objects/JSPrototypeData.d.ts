import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSPrototypeData extends Object {
    constructor()
    // private protoChildTrees: Shape[];
    getOrAddProtoChildTree(jsclass: JSClass, newRootShape: Shape): Shape;
    getProtoChildTree(jsclass: JSClass): Shape;
    // private getProtoChildTrees(): Shape[];
}