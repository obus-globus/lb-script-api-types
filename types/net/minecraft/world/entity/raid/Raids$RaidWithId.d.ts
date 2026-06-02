import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Raid } from '../../../../../net/minecraft/world/entity/raid/Raid.d.ts'
export class Raids$RaidWithId extends Record {
    static CODEC: Codec<Raids$RaidWithId>;
    static from(paramentry: Int2ObjectMap$Entry<Raid>): Raids$RaidWithId;
    // private id: number;
    // private raid: Raid;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): number;
    raid(): Raid;
    toString(): string;
}