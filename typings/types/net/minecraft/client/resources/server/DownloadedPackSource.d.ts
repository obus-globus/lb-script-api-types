import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Proxy } from '../../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
import type { GameConfig$UserData } from '../../../../../net/minecraft/client/main/GameConfig$UserData.d.ts'
import type { PackDownloader } from '../../../../../net/minecraft/client/resources/server/PackDownloader.d.ts'
import type { PackLoadFeedback } from '../../../../../net/minecraft/client/resources/server/PackLoadFeedback.d.ts'
import type { PackReloadConfig } from '../../../../../net/minecraft/client/resources/server/PackReloadConfig.d.ts'
import type { PackReloadConfig$Callbacks } from '../../../../../net/minecraft/client/resources/server/PackReloadConfig$Callbacks.d.ts'
import type { PackReloadConfig$IdAndPath } from '../../../../../net/minecraft/client/resources/server/PackReloadConfig$IdAndPath.d.ts'
import type { ServerPackManager } from '../../../../../net/minecraft/client/resources/server/ServerPackManager.d.ts'
import type { ServerPackManager$PackPromptStatus } from '../../../../../net/minecraft/client/resources/server/ServerPackManager$PackPromptStatus.d.ts'
import type { Connection } from '../../../../../net/minecraft/network/Connection.d.ts'
import type { DownloadQueue } from '../../../../../net/minecraft/server/packs/DownloadQueue.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PackSource } from '../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
import type { RepositorySource } from '../../../../../net/minecraft/server/packs/repository/RepositorySource.d.ts'
import type { HttpUtil$DownloadProgressListener } from '../../../../../net/minecraft/util/HttpUtil$DownloadProgressListener.d.ts'
export class DownloadedPackSource extends Object implements AutoCloseable {
    constructor(minecraft: Minecraft, packCache: Path, user: GameConfig$UserData)
    // private downloadQueue: DownloadQueue;
    // private manager: ServerPackManager;
    // private minecraft: Minecraft;
    // private packFeedback: PackLoadFeedback;
    // private packIdSerialNumber: number;
    // private packSource: (param0: (param0: Pack) => void) => void;
    // private packType: PackSource;
    // private pendingReload: PackReloadConfig$Callbacks;
    allowServerPacks(): void;
    cleanupAfterDisconnect(): void;
    close(): void;
    configureForLocalWorld(): void;
    configureForServerControl(connection: Connection, packPromptStatus: ServerPackManager$PackPromptStatus): void;
    // private createDownloadNotifier(totalCount: number): HttpUtil$DownloadProgressListener;
    // private createDownloader(downloadQueue: DownloadQueue, mainThreadExecutor: Executor, user: User, proxy: Proxy): PackDownloader;
    // private createReloadConfig(): PackReloadConfig;
    createRepositorySource(): (param0: (param0: Pack) => void) => void;
    // private createUpdateScheduler(mainThreadExecutor: Executor): () => void;
    // private loadRequestedPacks(packsToLoad: PackReloadConfig$IdAndPath[]): Pack[];
    onRecovery(): void;
    onRecoveryFailure(): void;
    onReloadSuccess(): void;
    popAll(): void;
    popPack(id: UUID): void;
    pushLocalPack(id: UUID, path: Path): void;
    pushPack(id: UUID, url: URL, hash: string): void;
    rejectServerPacks(): void;
    // private startReload(callbacks: PackReloadConfig$Callbacks): void;
    waitForPackFeedback(packId: UUID): CompletableFuture<void>;
}