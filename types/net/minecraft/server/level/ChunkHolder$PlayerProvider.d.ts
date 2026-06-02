import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface ChunkHolder$PlayerProvider extends Object{
    getPlayers(pos: ChunkPos, borderOnly: boolean): ServerPlayer[];
}