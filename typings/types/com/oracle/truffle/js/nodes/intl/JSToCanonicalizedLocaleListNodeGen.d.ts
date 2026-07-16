import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { JSToCanonicalizedLocaleListNodeGen$ForeignTypeData } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNodeGen$ForeignTypeData.d.ts'
import type { JSToCanonicalizedLocaleListNodeGen$OtherTypeData } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNodeGen$OtherTypeData.d.ts'
import type { TypeOfNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/TypeOfNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToCanonicalizedLocaleListNodeGen extends JSToCanonicalizedLocaleListNode {
    static create(paramcontext: JSContext): JSToCanonicalizedLocaleListNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private equalsNode: TruffleString$EqualNode;
    // private foreignType_cache: JSToCanonicalizedLocaleListNodeGen$ForeignTypeData;
    // private otherType_cache: JSToCanonicalizedLocaleListNodeGen$OtherTypeData;
    // private state_0_: number;
    // private toJavaStringNode: TruffleString$ToJavaStringNode;
    // private toStringNode: JSToStringNode;
    // private typeOfNode: TypeOfNode;
    // private executeAndSpecialize(arg0Value: Object): string[];
    executeLanguageTags(arg0Value: Object): string[];
}