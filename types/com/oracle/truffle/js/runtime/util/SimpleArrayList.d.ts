import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SimpleArrayList<E extends Object | number | string | boolean> extends Object {
    static create(parammaxAssumedLength: number): SimpleArrayList<Object>;
    static createEmpty(): SimpleArrayList<Object>;
    constructor()
    constructor(capacity: number)
    // private elements: Object[];
    // private size: number;
    add(e: E, node: Node, growProfile: InlinedBranchProfile): void;
    addUncached(e: E): void;
    addUnchecked(e: E): void;
    // private ensureCapacity(minCapacity: number, node: Node, growProfile: InlinedBranchProfile): void;
    // private ensureCapacityIntl(minCapacity: number): void;
    get(index: number): E;
    pop(): Object;
    set(index: number, elem: E): void;
    size(): number;
    toArray(): Object[];
    toArray(a: T[]): T[];
    toString(): string;
}