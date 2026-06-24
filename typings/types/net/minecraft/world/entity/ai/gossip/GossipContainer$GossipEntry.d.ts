import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GossipType } from '../../../../../../net/minecraft/world/entity/ai/gossip/GossipType.d.ts'
export class GossipContainer$GossipEntry extends Record {
    static CODEC: Codec<GossipContainer$GossipEntry>;
    private constructor(target: UUID, type: GossipType, value: number)
    // private target: UUID;
    // private type: GossipType;
    // private value: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    target(): UUID;
    toString(): string;
    type(): GossipType;
    value(): number;
    weightedValue(): number;
}