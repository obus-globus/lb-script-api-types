import type { InlineSupport$InlinableField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlinableField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
export class InlineSupport$BooleanField extends InlineSupport$InlinableField {
    static create(paramdeclaringLookup: MethodHandles$Lookup, paramfield: string): InlineSupport$BooleanField;
    constructor(lookup: MethodHandles$Lookup, fieldName: string)
    createParentAccessor(parentClass: Class<Node>): InlineSupport$BooleanField;
    get(node: Node): boolean;
    set(node: Node, value: boolean): void;
}