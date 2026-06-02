import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FileUpload extends HttpData, Object{
    copy(): FileUpload;
    duplicate(): FileUpload;
    getContentTransferEncoding(): string;
    getContentType(): string;
    getFilename(): string;
    replace(arg0: ByteBuf): FileUpload;
    retain(): FileUpload;
    retain(arg0: number): FileUpload;
    retainedDuplicate(): FileUpload;
    setContentTransferEncoding(arg0: string): void;
    setContentType(arg0: string): void;
    setFilename(arg0: string): void;
    touch(): FileUpload;
    touch(arg0: Object): FileUpload;
}