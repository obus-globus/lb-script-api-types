import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { DoublePredicate } from '../../../../../../java/util/function/DoublePredicate.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { GossipContainer$EntityGossips } from '../../../../../../net/minecraft/world/entity/ai/gossip/GossipContainer$EntityGossips.d.ts'
import type { GossipContainer$GossipEntry } from '../../../../../../net/minecraft/world/entity/ai/gossip/GossipContainer$GossipEntry.d.ts'
import type { GossipType } from '../../../../../../net/minecraft/world/entity/ai/gossip/GossipType.d.ts'
export class GossipContainer extends Object {
    static CODEC: Codec<GossipContainer>;
    static DISCARD_THRESHOLD: number;
    constructor()
    private constructor(entries: GossipContainer$GossipEntry[])
    // private gossips: Map<UUID, GossipContainer$EntityGossips>;
    add(target: UUID, type: GossipType, amountToAdd: number): void;
    clear(): void;
    copy(): GossipContainer;
    decay(): void;
    getCountForType(type: GossipType, valueTest: (param0: number) => boolean): number;
    getGossipEntries(): Map<UUID, { [key: string]: any }>;
    // private getOrCreate(target: UUID): GossipContainer$EntityGossips;
    getReputation(entity: UUID, types: (param0: GossipType) => boolean): number;
    // private mergeValuesForAddition(type: GossipType, oldValue: number, newValue: number): number;
    putAll(container: GossipContainer): void;
    remove(target: UUID, type: GossipType): void;
    remove(target: UUID, type: GossipType, amountToRemove: number): void;
    remove(type: GossipType): void;
    // private selectGossipsForTransfer(random: RandomSource, maxCount: number): GossipContainer$GossipEntry[];
    transferFrom(source: GossipContainer, random: RandomSource, maxCount: number): void;
    // private unpack(): Stream<GossipContainer$GossipEntry>;
}