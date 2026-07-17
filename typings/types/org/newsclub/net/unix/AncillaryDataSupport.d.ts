import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AncillaryDataSupport extends Object implements Closeable {
    constructor()
    // private ancillaryReceiveBuffer: ByteBuffer;
    // private openReceivedFileDescriptors: JavaMap<FileDescriptor, number>;
    // private pendingFileDescriptors: number[];
    // private receivedFileDescriptors: FileDescriptor[][];
    // private tipcDestName: number[];
    // private tipcErrorInfo: number[];
    clearReceivedFileDescriptors(): void;
    close(): void;
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    getAncillaryReceiveBufferSize(): number;
    getReceivedFileDescriptors(): FileDescriptor[];
    getTIPCDestName(): number[];
    getTIPCErrorInfo(): number[];
    hasOutboundFileDescriptors(): boolean;
    receiveFileDescriptors(arg0: number[]): void;
    setAncillaryReceiveBufferSize(arg0: number): void;
    setAncillaryReceiveBufferSize0(arg0: number): void;
    setOutboundFileDescriptors(...arg0: FileDescriptor[]): void;
    setOutboundFileDescriptors(arg0: number[]): void;
    setTipcDestName(arg0: number, arg1: number, arg2: number): void;
    setTipcErrorInfo(arg0: number, arg1: number): void;
}