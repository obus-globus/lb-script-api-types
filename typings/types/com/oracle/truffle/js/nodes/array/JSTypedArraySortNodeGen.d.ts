import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSTypedArraySortNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSTypedArraySortNode.d.ts'
import type { JSTypedArraySortNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSTypedArraySortNodeGen$CachedData.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSTypedArraySortNodeGen extends JSTypedArraySortNode {
    static create(): JSTypedArraySortNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cached_cache: JSTypedArraySortNodeGen$CachedData;
    // private interop: InteropLibrary;
    // private state_0_: number;
    execute(arg0Value: JSTypedArrayObject, arg1Value: JSTypedArrayObject, arg2Value: number, arg3Value: (param0: Object) => boolean): void;
    // private executeAndSpecialize(arg0Value: JSTypedArrayObject, arg1Value: JSTypedArrayObject, arg2Value: number, arg3Value: (param0: Object) => boolean): void;
}