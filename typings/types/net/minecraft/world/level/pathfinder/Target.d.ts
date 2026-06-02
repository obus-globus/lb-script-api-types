import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
export class Target extends Node {
    static createFromStream(parambuffer: FriendlyByteBuf): Node;
    static createFromStream(parambuffer: FriendlyByteBuf): Target;
    static createHash(paramx: number, paramy: number, paramz: number): number;
    constructor(x: number, y: number, z: number)
    constructor(node: Node)
    // private bestHeuristic: number;
    readonly bestNode: Node;
    readonly reached: boolean;
    getBestNode(): Node;
    isReached(): boolean;
    setReached(): void;
    updateBest(heuristic: number, node: Node): void;
}