import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerChunkEvents$FullChunkStatusChange } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents$FullChunkStatusChange.d.ts'
import type { ServerChunkEvents$Generate } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents$Generate.d.ts'
import type { ServerChunkEvents$Load } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents$Load.d.ts'
import type { ServerChunkEvents$Unload } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents$Unload.d.ts'
import type { FullChunkStatus } from '../../../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LevelChunk } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ServerChunkEvents extends Object {
    static CHUNK_GENERATE: Event<(param0: ServerLevel, param1: LevelChunk) => void>;
    static CHUNK_LOAD: Event<(param0: ServerLevel, param1: LevelChunk, param2: boolean) => void>;
    static CHUNK_UNLOAD: Event<(param0: ServerLevel, param1: LevelChunk) => void>;
    static FULL_CHUNK_STATUS_CHANGE: Event<(param0: ServerLevel, param1: LevelChunk, param2: FullChunkStatus, param3: FullChunkStatus) => void>;
    private constructor()
}