import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractDiskHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/AbstractDiskHttpData.d.ts'
import type { FileUpload } from '../../../../../../io/netty/handler/codec/http/multipart/FileUpload.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { InterfaceHttpData$HttpDataType } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData$HttpDataType.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DiskFileUpload extends AbstractDiskHttpData implements FileUpload {
    static baseDirectory: string;
    static deleteOnExitTemporaryFile: boolean;
    static postfix: string;
    static prefix: string;
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: Charset, arg5: number)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: Charset, arg5: number, arg6: string, arg7: boolean)
    // private baseDir: string;
    readonly contentTransferEncoding: string;
    readonly contentType: string;
    // private deleteOnExit: boolean;
    readonly filename: string;
    compareTo(arg0: FileUpload): number;
    compareTo(arg0: InterfaceHttpData): number;
    copy(): FileUpload;
    deleteOnExit(): boolean;
    duplicate(): FileUpload;
    equals(arg0: Object | null): boolean;
    getBaseDirectory(): string;
    getContentTransferEncoding(): string;
    getContentType(): string;
    getDiskFilename(): string;
    getFilename(): string;
    getHttpDataType(): InterfaceHttpData$HttpDataType;
    getPostfix(): string;
    getPrefix(): string;
    hashCode(): number;
    replace(arg0: ByteBuf): FileUpload;
    retain(): FileUpload;
    retain(arg0: number): FileUpload;
    retainedDuplicate(): FileUpload;
    setContentTransferEncoding(arg0: string): void;
    setContentType(arg0: string): void;
    setFilename(arg0: string): void;
    toString(): string;
    touch(): FileUpload;
    touch(arg0: Object): FileUpload;
}