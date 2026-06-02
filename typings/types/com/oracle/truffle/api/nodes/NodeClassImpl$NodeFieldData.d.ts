import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeClassImpl$NodeFieldKind } from '../../../../../com/oracle/truffle/api/nodes/NodeClassImpl$NodeFieldKind.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IllegalArgumentException } from '../../../../../java/lang/IllegalArgumentException.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeClassImpl$NodeFieldData extends Object {
    constructor(kind: NodeClassImpl$NodeFieldKind, field: Field)
    // private declaringClass: Class<Object>;
    // private kind: NodeClassImpl$NodeFieldKind;
    // private name: string;
    // private offset: number;
    // private type: Class<Object>;
    getObject(receiver: Node): Object;
    getObjectOrPrimitive(node: Node): Object;
    getOffset(): number;
    getOrder(): number;
    // private illegalArgumentException(value: Object): IllegalArgumentException;
    putObject(receiver: Node, value: Object): void;
    toString(): string;
    // private validateAccess(receiver: Node, value: Object): boolean;
}