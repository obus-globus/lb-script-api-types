import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$GuardedWriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$GuardedWriteElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$ForeignObjectWriteElementTypeCacheNode extends WriteElementNode$GuardedWriteElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private exportValue: ExportValueNode;
    // private interop: InteropLibrary;
    // private setterInterop: InteropLibrary;
    // private toArrayIndexNode: ToArrayIndexNode;
    // private toPropertyKeyNode: JSToPropertyKeyNode;
    doForeignObject(target: Object, index: Object, value: Object, receiver: Object, root: WriteElementNode, classProfile: InlinedExactClassProfile, errorBranch: InlinedBranchProfile): void;
    guard(target: Object): boolean;
    // private toArrayIndex(index: Object): Object;
    // private toPropertyKey(index: Object): Object;
    // private tryInvokeSetter(thisObj: Object, key: TruffleString, value: Object, context: JSContext): boolean;
}