import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DebugGameEventInfo extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DebugGameEventInfo>;
    constructor(event: Holder<GameEvent>, pos: Vec3)
    // private event: Holder<GameEvent>;
    // private pos: Vec3;
    equals(o: Object | null): boolean;
    event(): Holder<GameEvent>;
    hashCode(): number;
    pos(): Vec3;
    toString(): string;
}