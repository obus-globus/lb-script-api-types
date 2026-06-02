import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
import type { Path$DebugData } from '../../../../../net/minecraft/world/level/pathfinder/Path$DebugData.d.ts'
import type { Target } from '../../../../../net/minecraft/world/level/pathfinder/Target.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Path extends Object {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, Path>;
    static createFromStream(parambuffer: FriendlyByteBuf): Path;
    constructor(nodes: Node[], target: BlockPos, reached: boolean)
    // private debugData: Path$DebugData;
    readonly distToTarget: number;
    readonly nextNodeIndex: number;
    // private nodes: Node[];
    // private reached: boolean;
    readonly target: BlockPos;
    advance(): void;
    canReach(): boolean;
    copy(): Path;
    debugData(): Path$DebugData;
    equals(obj: Object | null): boolean;
    getDistToTarget(): number;
    getEndNode(): Node;
    getEntityPosAtNode(entity: Entity, index: number): Vec3;
    getNextEntityPos(entity: Entity): Vec3;
    getNextNode(): Node;
    getNextNodeIndex(): number;
    getNextNodePos(): BlockPos;
    getNode(i: number): Node;
    getNodeCount(): number;
    getNodePos(index: number): BlockPos;
    getPreviousNode(): Node;
    getTarget(): BlockPos;
    hashCode(): number;
    isDone(): boolean;
    notStarted(): boolean;
    replaceNode(index: number, replaceWith: Node): void;
    sameAs(path: Path): boolean;
    setDebug(openSet: Node[], closedSet: Node[], targets: Target[]): void;
    setNextNodeIndex(nextNodeIndex: number): void;
    toString(): string;
    truncateNodes(index: number): void;
    writeToStream(buffer: FriendlyByteBuf): void;
}