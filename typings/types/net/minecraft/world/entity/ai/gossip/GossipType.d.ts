import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class GossipType extends Enum<GossipType> implements StringRepresentable {
    static CODEC: Codec<GossipType>;
    static MAJOR_NEGATIVE: GossipType;
    static MAJOR_POSITIVE: GossipType;
    static MINOR_NEGATIVE: GossipType;
    static MINOR_POSITIVE: GossipType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REPUTATION_CHANGE_PER_EVENT: number;
    static REPUTATION_CHANGE_PER_EVERLASTING_MEMORY: number;
    static REPUTATION_CHANGE_PER_TRADE: number;
    static TRADING: GossipType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GossipType;
    static values(): GossipType[];
    private constructor(id: string, weight: number, max: number, decayPerDay: number, decayPerTransfer: number)
    decayPerDay: number;
    decayPerTransfer: number;
    id: string;
    max: number;
    weight: number;
    getSerializedName(): string;
    name(): "MAJOR_NEGATIVE" | "MINOR_NEGATIVE" | "MINOR_POSITIVE" | "MAJOR_POSITIVE" | "TRADING";
}