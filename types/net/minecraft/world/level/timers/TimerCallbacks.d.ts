import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
import type { TimerCallback } from '../../../../../net/minecraft/world/level/timers/TimerCallback.d.ts'
export class TimerCallbacks<C extends Object | number | string | boolean> extends Object {
    static SERVER_CALLBACKS: TimerCallbacks<MinecraftServer>;
    constructor()
    // private codec: Codec<TimerCallback<C>>;
    // private idMapper: ExtraCodecs$LateBoundIdMapper<Identifier, MapCodec<TimerCallback<C>>>;
    codec(): Codec<TimerCallback<C>>;
    register(id: Identifier, codec: MapCodec<TimerCallback<C>>): TimerCallbacks<C>;
}