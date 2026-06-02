import type { RealmsDownloadLatestWorldScreen$DownloadStatus } from '../../../../com/mojang/realmsclient/gui/screens/RealmsDownloadLatestWorldScreen$DownloadStatus.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { CountingOutputStream } from '../../../../org/apache/commons/io/output/CountingOutputStream.d.ts'
export class FileDownload$DownloadCountingOutputStream extends CountingOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream, downloadStatus: RealmsDownloadLatestWorldScreen$DownloadStatus)
    // private downloadStatus: RealmsDownloadLatestWorldScreen$DownloadStatus;
    afterWrite(n: number): void;
}