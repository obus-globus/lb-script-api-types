import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketExtensions } from '../../../../org/newsclub/net/unix/AFSocketExtensions.d.ts'
import type { AFUNIXSocketCredentials } from '../../../../org/newsclub/net/unix/AFUNIXSocketCredentials.d.ts'
export interface AFUNIXSocketExtensions extends Object, AFSocketExtensions{
    clearReceivedFileDescriptors(): void;
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    getAncillaryReceiveBufferSize(): number;
    getPeerCredentials(): AFUNIXSocketCredentials;
    getReceivedFileDescriptors(): FileDescriptor[];
    hasOutboundFileDescriptors(): boolean;
    setAncillaryReceiveBufferSize(arg0: number): void;
    setOutboundFileDescriptors(...arg0: FileDescriptor[]): void;
}