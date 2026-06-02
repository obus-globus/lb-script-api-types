import type { OptionalLong } from '../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpUtil$DownloadProgressListener extends Object{
    downloadStart(sizeBytes: OptionalLong): void;
    downloadedBytes(bytesSoFar: number): void;
    requestFinished(success: boolean): void;
    requestStart(): void;
}