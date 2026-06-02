import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TRegexUtil$InteropToIntNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropToIntNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexUtil$TRegexNamedCaptureGroupsAccessor extends Object {
    static getGroupNumbers(paramnamedCaptureGroupsMap: Object, paramname: TruffleString, paramlibMap: InteropLibrary, paramlibArray: InteropLibrary, paramtoIntNode: TRegexUtil$InteropToIntNode, paramnode: Node): number[];
    static hasGroup(paramnamedCaptureGroupsMap: Object, paramname: TruffleString, paraminterop: InteropLibrary): boolean;
    private constructor()
}