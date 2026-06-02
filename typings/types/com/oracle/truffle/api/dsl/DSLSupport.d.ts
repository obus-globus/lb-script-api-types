import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DSLSupport extends Object {
    static assertIdempotence(paramguardValue: boolean): boolean;
    static lookupEnumConstants(paramc: Class<Object>): Object | null;
    static maybeInsert(paramnode: Node, paramo: Object | null): Object | null;
    static maybeInsert(paramnode: Node, paramo: Object | null): Object | null;
    private constructor()
}