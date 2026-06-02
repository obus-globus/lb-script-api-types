import type { RealmsClient } from '../../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { RealmsWorldUploadStatusTracker } from '../../../../../com/mojang/realmsclient/client/worldupload/RealmsWorldUploadStatusTracker.d.ts'
import type { RealmsSlot } from '../../../../../com/mojang/realmsclient/dto/RealmsSlot.d.ts'
import type { UploadInfo } from '../../../../../com/mojang/realmsclient/dto/UploadInfo.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
export class RealmsWorldUpload extends Object {
    static UPLOAD_RETRIES: number;
    constructor(worldFolder: Path[], realmsSlot: RealmsSlot, user: User, realmId: number, statusCallback: RealmsWorldUploadStatusTracker)
    // private cancelled: boolean;
    // private client: RealmsClient;
    // private realmId: number;
    // private realmsSlot: RealmsSlot;
    // private statusCallback: RealmsWorldUploadStatusTracker;
    // private uploadTask: CompletableFuture<Object>;
    // private user: User;
    // private worldFolder: Path[];
    cancel(): void;
    packAndUpload(): CompletableFuture<Object>;
    // private requestUploadInfoWithRetries(): UploadInfo;
}