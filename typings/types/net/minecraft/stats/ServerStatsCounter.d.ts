import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Stat } from '../../../net/minecraft/stats/Stat.d.ts'
import type { StatsCounter } from '../../../net/minecraft/stats/StatsCounter.d.ts'
import type { Player } from '../../../net/minecraft/world/entity/player/Player.d.ts'
export class ServerStatsCounter extends StatsCounter {
    constructor(server: MinecraftServer, file: Path[])
    // private dirty: Stat<Object>[];
    // private file: Path[];
    // private getDirty(): Stat<Object>[];
    markAllDirty(): void;
    parse(fixerUpper: DataFixer, element: JsonElement): void;
    save(): void;
    sendStats(player: ServerPlayer): void;
    setValue(player: Player, stat: Stat<Object>, count: number): void;
    toJson(): JsonElement;
}