import type { UploadStatus } from '../../../../com/mojang/realmsclient/client/UploadStatus.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { CountingInputStream } from '../../../../org/apache/commons/io/input/CountingInputStream.d.ts'
export class FileUpload$UploadCountingInputStream extends CountingInputStream {
    static nullInputStream(): InputStream;
    private constructor(proxy: InputStream, uploadStatus: UploadStatus)
    // private uploadStatus: UploadStatus;
    afterRead(n: number): void;
}