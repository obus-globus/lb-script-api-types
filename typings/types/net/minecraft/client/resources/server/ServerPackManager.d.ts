import type { HashCode } from '../../../../../com/google/common/hash/HashCode.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackDownloader } from '../../../../../net/minecraft/client/resources/server/PackDownloader.d.ts'
import type { PackLoadFeedback } from '../../../../../net/minecraft/client/resources/server/PackLoadFeedback.d.ts'
import type { PackReloadConfig } from '../../../../../net/minecraft/client/resources/server/PackReloadConfig.d.ts'
import type { ServerPackManager$PackPromptStatus } from '../../../../../net/minecraft/client/resources/server/ServerPackManager$PackPromptStatus.d.ts'
import type { ServerPackManager$ServerPackData } from '../../../../../net/minecraft/client/resources/server/ServerPackManager$ServerPackData.d.ts'
import type { DownloadQueue$BatchResult } from '../../../../../net/minecraft/server/packs/DownloadQueue$BatchResult.d.ts'
export class ServerPackManager extends Object {
    constructor(downloader: PackDownloader, packLoadFeedback: PackLoadFeedback, reloadConfig: PackReloadConfig, updateRequest: () => void, packPromptStatus: ServerPackManager$PackPromptStatus)
    // private downloader: PackDownloader;
    // private packLoadFeedback: PackLoadFeedback;
    // private packPromptStatus: ServerPackManager$PackPromptStatus;
    // private packs: ServerPackManager$ServerPackData[];
    // private reloadConfig: PackReloadConfig;
    // private updateRequest: () => void;
    // private acceptPack(pack: ServerPackManager$ServerPackData): void;
    allowServerPacks(): void;
    // private cleanupRemovedPacks(): void;
    // private findPackInfo(id: UUID): ServerPackManager$ServerPackData;
    // private markExistingPacksAsRemoved(id: UUID): void;
    // private onDownload(data: ServerPackManager$ServerPackData[], result: DownloadQueue$BatchResult): void;
    popAll(): void;
    popPack(id: UUID): void;
    pushLocalPack(id: UUID, path: Path): void;
    // private pushNewPack(id: UUID, pack: ServerPackManager$ServerPackData): void;
    pushPack(id: UUID, url: URL, hash: HashCode): void;
    // private registerForUpdate(): void;
    rejectServerPacks(): void;
    resetPromptStatus(): void;
    tick(): void;
    // private triggerReloadIfNeeded(): void;
    // private updateDownloads(): boolean;
}