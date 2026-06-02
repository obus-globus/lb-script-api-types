import type { InlineSupport$InlinableField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlinableField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlineSupport$ReferenceField<T extends Object | number | string | boolean> extends InlineSupport$InlinableField {
    static create(paramdeclaringLookup: MethodHandles$Lookup, paramfield: string, paramvalueClass: Class<Object>): InlineSupport$ReferenceField<Object>;
    constructor(receiverClass: Class<Object>, lookupFieldClass: Class<Object>, declaringLookup: MethodHandles$Lookup, fieldName: string, valueClass: Class<T>)
    // private valueClass: Class<Object>;
    compareAndSet(node: Node, expect: T, update: T): boolean;
    createParentAccessor(parentClass: Class<Node>): InlineSupport$ReferenceField<T>;
    get(node: Node): T;
    getVolatile(node: Node): T;
    set(node: Node, value: T): void;
}