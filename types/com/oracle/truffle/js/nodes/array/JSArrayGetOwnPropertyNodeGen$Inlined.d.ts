import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JSArrayGetOwnPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayGetOwnPropertyNode.d.ts'
import type { JSArrayGetOwnPropertyNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayGetOwnPropertyNodeGen$CachedData.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
export class JSArrayGetOwnPropertyNodeGen$Inlined extends JSArrayGetOwnPropertyNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private cached_cache: InlineSupport$ReferenceField<JSArrayGetOwnPropertyNodeGen$CachedData>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: JSArrayObject, arg2Value: number, arg3Value: boolean, arg4Value: boolean, arg5Value: boolean, arg6Value: boolean): PropertyDescriptor;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: JSArrayObject, arg2Value: number, arg3Value: boolean, arg4Value: boolean, arg5Value: boolean, arg6Value: boolean): PropertyDescriptor;
}