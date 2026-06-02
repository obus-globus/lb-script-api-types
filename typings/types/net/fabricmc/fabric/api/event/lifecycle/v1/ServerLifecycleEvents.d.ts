import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerLifecycleEvents$AfterSave } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$AfterSave.d.ts'
import type { ServerLifecycleEvents$BeforeSave } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$BeforeSave.d.ts'
import type { ServerLifecycleEvents$EndDataPackReload } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$EndDataPackReload.d.ts'
import type { ServerLifecycleEvents$ServerStarted } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$ServerStarted.d.ts'
import type { ServerLifecycleEvents$ServerStarting } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$ServerStarting.d.ts'
import type { ServerLifecycleEvents$ServerStopped } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$ServerStopped.d.ts'
import type { ServerLifecycleEvents$ServerStopping } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$ServerStopping.d.ts'
import type { ServerLifecycleEvents$StartDataPackReload } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$StartDataPackReload.d.ts'
import type { ServerLifecycleEvents$SyncDataPackContents } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents$SyncDataPackContents.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { CloseableResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
export class ServerLifecycleEvents extends Object {
    static AFTER_SAVE: Event<(param0: MinecraftServer, param1: boolean, param2: boolean) => void>;
    static BEFORE_SAVE: Event<(param0: MinecraftServer, param1: boolean, param2: boolean) => void>;
    static END_DATA_PACK_RELOAD: Event<(param0: MinecraftServer, param1: CloseableResourceManager, param2: boolean) => void>;
    static SERVER_STARTED: Event<(param0: MinecraftServer) => void>;
    static SERVER_STARTING: Event<(param0: MinecraftServer) => void>;
    static SERVER_STOPPED: Event<(param0: MinecraftServer) => void>;
    static SERVER_STOPPING: Event<(param0: MinecraftServer) => void>;
    static START_DATA_PACK_RELOAD: Event<(param0: MinecraftServer, param1: CloseableResourceManager) => void>;
    static SYNC_DATA_PACK_CONTENTS: Event<(param0: ServerPlayer, param1: boolean) => void>;
    private constructor()
}