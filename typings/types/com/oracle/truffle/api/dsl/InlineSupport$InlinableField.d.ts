import type { InlineSupport$UnsafeField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$UnsafeField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InlineSupport$InlinableField extends InlineSupport$UnsafeField {
    constructor(prev: InlineSupport$InlinableField)
    constructor(receiverClass: Class<Object>, declaringClass: Class<Object>, declaringLookup: MethodHandles$Lookup, fieldName: string, valueClass: Class<Object>)
    validate(node: Node): boolean;
}