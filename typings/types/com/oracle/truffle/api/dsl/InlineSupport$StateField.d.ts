import type { InlineSupport$InlinableField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlinableField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
export class InlineSupport$StateField extends InlineSupport$InlinableField {
    static create(paramdeclaringLookup: MethodHandles$Lookup, paramfield: string): InlineSupport$StateField;
    constructor(prev: InlineSupport$StateField, offset: number, length: number)
    constructor(declaringLookup: MethodHandles$Lookup, fieldName: string, offset: number, length: number)
    // private bitLength: number;
    // private bitMask: number;
    // private bitOffset: number;
    get(node: Node): number;
    // private noBitsLost(providedBits: number): boolean;
    set(node: Node, value: number): void;
    subUpdater(newOffset: number, newLength: number): InlineSupport$StateField;
}