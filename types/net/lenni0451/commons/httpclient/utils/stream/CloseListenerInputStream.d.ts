import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CloseListenerInputStream$CloseListener } from '../../../../../../net/lenni0451/commons/httpclient/utils/stream/CloseListenerInputStream$CloseListener.d.ts'
export class CloseListenerInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: () => void)
    // private closeListener: () => void;
    // private inputStream: InputStream;
    available(): number;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}