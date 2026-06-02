import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientChunkEvents$Load } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientChunkEvents$Load.d.ts'
import type { ClientChunkEvents$Unload } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientChunkEvents$Unload.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelChunk } from '../../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ClientChunkEvents extends Object {
    static CHUNK_LOAD: Event<(param0: ClientLevel, param1: LevelChunk) => void>;
    static CHUNK_UNLOAD: Event<(param0: ClientLevel, param1: LevelChunk) => void>;
    private constructor()
}