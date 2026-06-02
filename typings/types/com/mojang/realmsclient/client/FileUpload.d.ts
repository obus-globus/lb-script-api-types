import type { UploadStatus } from '../../../../com/mojang/realmsclient/client/UploadStatus.d.ts'
import type { UploadInfo } from '../../../../com/mojang/realmsclient/dto/UploadInfo.d.ts'
import type { UploadResult } from '../../../../com/mojang/realmsclient/gui/screens/UploadResult.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { HttpClient } from '../../../../java/net/http/HttpClient.d.ts'
import type { HttpResponse } from '../../../../java/net/http/HttpResponse.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { User } from '../../../../net/minecraft/client/User.d.ts'
export class FileUpload extends Object implements AutoCloseable {
    constructor(file: File, realmId: number, slotId: number, uploadInfo: UploadInfo, user: User, clientVersion: string, worldVersion: string, uploadStatus: UploadStatus)
    // private client: HttpClient;
    // private clientVersion: string;
    // private file: File;
    // private realmId: number;
    // private sessionId: string;
    // private slotId: number;
    // private uploadInfo: UploadInfo;
    // private uploadStatus: UploadStatus;
    // private username: string;
    // private worldVersion: string;
    close(): void;
    // private getRetryDelaySeconds(response: HttpResponse<Object>): number;
    // private handleResponse(response: HttpResponse<string>): UploadResult;
    // private requestUpload(currentAttempt: number, fileSize: number): CompletableFuture<UploadResult>;
    // private shouldRetry(retryDelaySeconds: number, currentAttempt: number): boolean;
    startUpload(): CompletableFuture<UploadResult>;
    // private uploadCookie(): string;
}