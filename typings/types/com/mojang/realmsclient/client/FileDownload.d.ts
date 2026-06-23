import type { WorldDownload } from '../../../../com/mojang/realmsclient/dto/WorldDownload.d.ts'
import type { RealmsDownloadLatestWorldScreen$DownloadStatus } from '../../../../com/mojang/realmsclient/gui/screens/RealmsDownloadLatestWorldScreen$DownloadStatus.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { HttpClient } from '../../../../java/net/http/HttpClient.d.ts'
import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelStorageSource } from '../../../../net/minecraft/world/level/storage/LevelStorageSource.d.ts'
export class FileDownload extends Object {
    static contentLength(paramdownloadLink: string): OptionalLong;
    static findAvailableFolderName(paramfolder: string): string;
    constructor()
    // private cancelled: boolean;
    // private currentThread: Thread;
    readonly error: boolean;
    readonly extracting: boolean;
    readonly finished: boolean;
    // private pendingRequest: CompletableFuture<Object>;
    // private resourcePackPath: File;
    // private tempFile: File;
    cancel(): void;
    download(worldDownload: WorldDownload, worldName: string, downloadStatus: RealmsDownloadLatestWorldScreen$DownloadStatus, levelStorageSource: LevelStorageSource): void;
    // private download(downloadStatus: RealmsDownloadLatestWorldScreen$DownloadStatus, client: HttpClient, url: string, target: File): void;
    // private finishResourcePackDownload(downloadStatus: RealmsDownloadLatestWorldScreen$DownloadStatus, tempFile: File, worldDownload: WorldDownload): void;
    // private finishWorldDownload(worldName: string, tempFile: File, levelStorageSource: LevelStorageSource, downloadStatus: RealmsDownloadLatestWorldScreen$DownloadStatus): void;
    isError(): boolean;
    isExtracting(): boolean;
    isFinished(): boolean;
    // private joinCancellableRequest<T extends unknown>(pendingRequest: CompletableFuture<T>): T;
    // private untarGzipArchive(name: string, file: File, levelStorageSource: LevelStorageSource): void;
}