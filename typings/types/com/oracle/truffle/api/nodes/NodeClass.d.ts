import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export abstract class NodeClass extends Object {
    static get(paramnode: Node): NodeClass;
    static get(paramclazz: Class<Node>): NodeClass;
    constructor(clazz: Class<Node>)
    getAccessedFields(): Field[];
    getFieldName(field: Object): string;
    getFieldObject(field: Object, receiver: Node): Object;
    getFieldType(field: Object): Class<Object>;
    getFieldValue(field: Object, receiver: Node): Object;
    getNodeFieldArray(): Object[];
    getType(): Class<Node>;
    isChildField(field: Object): boolean;
    isChildrenField(field: Object): boolean;
    isCloneableField(field: Object): boolean;
    isReplaceAllowed(): boolean;
    makeIterator(node: Node): Iterator<Node>;
    nodeFieldsOrderedByKind(): boolean;
    putFieldObject(field: Object, receiver: Node, value: Object): void;
}