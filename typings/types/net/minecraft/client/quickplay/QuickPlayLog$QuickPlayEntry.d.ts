import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { QuickPlayLog$QuickPlayWorld } from '../../../../net/minecraft/client/quickplay/QuickPlayLog$QuickPlayWorld.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
export class QuickPlayLog$QuickPlayEntry extends Record {
    static CODEC: Codec<QuickPlayLog$QuickPlayEntry>;
    private constructor(quickPlayWorld: QuickPlayLog$QuickPlayWorld, lastPlayedTime: Instant, gamemode: GameType)
    // private gamemode: GameType;
    // private lastPlayedTime: Instant;
    // private quickPlayWorld: QuickPlayLog$QuickPlayWorld;
    equals(o: Object | null): boolean;
    gamemode(): GameType;
    hashCode(): number;
    lastPlayedTime(): Instant;
    quickPlayWorld(): QuickPlayLog$QuickPlayWorld;
    toString(): string;
}