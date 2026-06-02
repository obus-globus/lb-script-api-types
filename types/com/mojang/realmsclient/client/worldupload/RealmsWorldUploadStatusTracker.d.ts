import type { UploadStatus } from '../../../../../com/mojang/realmsclient/client/UploadStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RealmsWorldUploadStatusTracker extends Object{
    getUploadStatus(): UploadStatus;
    setUploading(): void;
}