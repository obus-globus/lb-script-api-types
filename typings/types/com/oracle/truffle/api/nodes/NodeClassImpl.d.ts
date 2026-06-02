import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeClass } from '../../../../../com/oracle/truffle/api/nodes/NodeClass.d.ts'
import type { NodeClassImpl$NodeFieldData } from '../../../../../com/oracle/truffle/api/nodes/NodeClassImpl$NodeFieldData.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class NodeClassImpl extends NodeClass {
    static get(paramnode: Node): NodeClass;
    static get(paramclazz: Class<Object>): NodeClass;
    constructor(clazz: Class<Node>)
    // private clazz: Class<Node>;
    // private fields: NodeClassImpl$NodeFieldData[];
    // private replaceAllowed: boolean;
    equals(obj: Object | null): boolean;
    getAccessedFields(): Field[];
    getFieldName(field: Object): string;
    getFieldObject(field: Object, receiver: Node): Object;
    getFieldType(field: Object): Class<Object>;
    getFieldValue(field: Object, receiver: Node): Object;
    getNodeFieldArray(): Object[];
    getType(): Class<Node>;
    hashCode(): number;
    isChildField(field: Object): boolean;
    isChildrenField(field: Object): boolean;
    isCloneableField(field: Object): boolean;
    isReplaceAllowed(): boolean;
    makeIterator(node: Node): Iterator<Node>;
    nodeFieldsOrderedByKind(): boolean;
    putFieldObject(field: Object, receiver: Node, value: Object): void;
}