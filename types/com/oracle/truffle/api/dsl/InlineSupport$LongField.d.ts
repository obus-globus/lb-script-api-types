import type { InlineSupport$InlinableField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlinableField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
export class InlineSupport$LongField extends InlineSupport$InlinableField {
    static create(paramdeclaringLookup: MethodHandles$Lookup, paramfield: string): InlineSupport$LongField;
    constructor(declaringLookup: MethodHandles$Lookup, fieldName: string)
    createParentAccessor(parentClass: Class<Node>): InlineSupport$LongField;
    get(node: Node): number;
    set(node: Node, value: number): void;
}