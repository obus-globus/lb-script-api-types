import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class DebugBrainDump extends Record {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, DebugBrainDump>;
    static takeBrainDump(paramserverLevel: ServerLevel, paramentity: LivingEntity): DebugBrainDump;
    constructor(name: string, profession: string, xp: number, health: number, maxHealth: number, inventory: string, wantsGolem: boolean, angerLevel: number, activities: string[], behaviors: string[], memories: string[], gossips: string[], pois: BlockPos[], potentialPois: BlockPos[])
    constructor(input: FriendlyByteBuf)
    // private activities: string[];
    // private angerLevel: number;
    // private behaviors: string[];
    // private gossips: string[];
    // private health: number;
    // private inventory: string;
    // private maxHealth: number;
    // private memories: string[];
    // private name: string;
    // private pois: BlockPos[];
    // private potentialPois: BlockPos[];
    // private profession: string;
    // private wantsGolem: boolean;
    // private xp: number;
    activities(): string[];
    angerLevel(): number;
    behaviors(): string[];
    equals(o: Object | null): boolean;
    gossips(): string[];
    hasPoi(poiPos: BlockPos): boolean;
    hasPotentialPoi(poiPos: BlockPos): boolean;
    hashCode(): number;
    health(): number;
    inventory(): string;
    maxHealth(): number;
    memories(): string[];
    name(): string;
    pois(): BlockPos[];
    potentialPois(): BlockPos[];
    profession(): string;
    toString(): string;
    wantsGolem(): boolean;
    write(output: FriendlyByteBuf): void;
    xp(): number;
}