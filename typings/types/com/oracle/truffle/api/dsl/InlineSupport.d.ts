import type { InlineSupport$InlinableField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlinableField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlineSupport extends Object {
    static validate(paramnode: Node, paramfield0: InlineSupport$InlinableField): boolean;
    static validate(paramnode: Node, paramfield0: InlineSupport$InlinableField, paramfield1: InlineSupport$InlinableField): boolean;
    static validate(paramnode: Node, paramfield0: InlineSupport$InlinableField, paramfield1: InlineSupport$InlinableField, ...paramfields: InlineSupport$InlinableField[]): boolean;
    private constructor()
}