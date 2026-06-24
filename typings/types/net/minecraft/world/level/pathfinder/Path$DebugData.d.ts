import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
import type { Target } from '../../../../../net/minecraft/world/level/pathfinder/Target.d.ts'
export class Path$DebugData extends Record {
    static read(paraminput: FriendlyByteBuf): Path$DebugData;
    constructor(openSet: Node[], closedSet: Node[], targetNodes: Target[])
    // private closedSet: Node[];
    // private openSet: Node[];
    // private targetNodes: Target[];
    closedSet(): Node[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    openSet(): Node[];
    targetNodes(): Target[];
    toString(): string;
    write(output: FriendlyByteBuf): void;
}