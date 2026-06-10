import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GossipContainer$GossipEntry } from '../../../../../../net/minecraft/world/entity/ai/gossip/GossipContainer$GossipEntry.d.ts'
import type { GossipType } from '../../../../../../net/minecraft/world/entity/ai/gossip/GossipType.d.ts'
export class GossipContainer$EntityGossips extends Object {
    private constructor()
    // private entries: Object2IntMap<GossipType>;
    decay(): void;
    isEmpty(): boolean;
    makeSureValueIsntTooLowOrTooHigh(type: GossipType): void;
    remove(type: GossipType): void;
    unpack(target: UUID): Stream<GossipContainer$GossipEntry>;
    weightedValue(types: (param0: GossipType) => boolean): number;
}