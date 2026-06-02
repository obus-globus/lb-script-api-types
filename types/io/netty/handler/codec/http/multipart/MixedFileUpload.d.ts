import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractMixedHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/AbstractMixedHttpData.d.ts'
import type { FileUpload } from '../../../../../../io/netty/handler/codec/http/multipart/FileUpload.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MixedFileUpload extends AbstractMixedHttpData<FileUpload> implements FileUpload {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: Charset, arg5: number, arg6: number)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: Charset, arg5: number, arg6: number, arg7: string, arg8: boolean)
    copy(): FileUpload;
    duplicate(): FileUpload;
    getContentTransferEncoding(): string;
    getContentType(): string;
    getFilename(): string;
    makeDiskData(): FileUpload;
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