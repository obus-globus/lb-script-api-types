import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { CachedGetPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedGetPropertyNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$GuardedReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$GuardedReadElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$ForeignObjectReadElementTypeCacheNode extends ReadElementNode$GuardedReadElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private foreignObjectPrototypeNode: ForeignObjectPrototypeNode;
    // private getterInterop: InteropLibrary;
    // private importValueNode: ImportValueNode;
    // private interop: InteropLibrary;
    // private optimistic: boolean;
    // private readFromPrototypeNode: CachedGetPropertyNode;
    // private toArrayIndexNode: ToArrayIndexNode;
    // private toPropertyKeyNode: JSToPropertyKeyNode;
    doForeignObject(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, classProfile: InlinedExactClassProfile, errorBranch: InlinedBranchProfile): Object;
    executeWithTargetAndIndexUnchecked(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    // private getImpl(truffleObject: Object, key: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, errorBranch: InlinedBranchProfile): Object;
    // private getSize(truffleObject: Object, errorBranch: InlinedBranchProfile): Object;
    guard(target: Object): boolean;
    // private maybeReadFromPrototype(truffleObject: Object, key: Object, receiver: Object, context: JSContext): Object;
    // private toArrayIndex(maybeIndex: Object): Object;
    // private toPropertyKey(index: Object): Object;
    // private tryGetters(thisObj: Object, key: TruffleString, context: JSContext): Object;
    // private tryInvokeGetter(thisObj: Object, prefix: TruffleString, key: TruffleString): Object;
}