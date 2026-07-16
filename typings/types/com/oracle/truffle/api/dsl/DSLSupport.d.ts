import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeInterface } from '../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export abstract class DSLSupport extends Object {
    static assertIdempotence(paramguardValue: boolean): boolean;
    static lookupEnumConstants<T extends Enum<any>>(paramc: Class<T>): T[];
    static maybeInsert<T extends NodeInterface>(paramnode: Node, paramo: T): T;
    static maybeInsert<T extends NodeInterface>(paramnode: Node, paramo: T[]): T[];
    private constructor()
}