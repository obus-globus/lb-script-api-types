import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NodeFactory$UnaryOperation extends Enum<NodeFactory$UnaryOperation> {
    static BITWISE_COMPLEMENT: NodeFactory$UnaryOperation;
    static MINUS: NodeFactory$UnaryOperation;
    static NOT: NodeFactory$UnaryOperation;
    static PLUS: NodeFactory$UnaryOperation;
    static POSTFIX_LOCAL_DECREMENT: NodeFactory$UnaryOperation;
    static POSTFIX_LOCAL_INCREMENT: NodeFactory$UnaryOperation;
    static PREFIX_LOCAL_DECREMENT: NodeFactory$UnaryOperation;
    static PREFIX_LOCAL_INCREMENT: NodeFactory$UnaryOperation;
    static TYPE_OF: NodeFactory$UnaryOperation;
    static VOID: NodeFactory$UnaryOperation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NodeFactory$UnaryOperation;
    static values(): NodeFactory$UnaryOperation[];
    private constructor()
    name(): "MINUS" | "PLUS" | "BITWISE_COMPLEMENT" | "NOT" | "POSTFIX_LOCAL_INCREMENT" | "PREFIX_LOCAL_INCREMENT" | "POSTFIX_LOCAL_DECREMENT" | "PREFIX_LOCAL_DECREMENT" | "TYPE_OF" | "VOID";
}