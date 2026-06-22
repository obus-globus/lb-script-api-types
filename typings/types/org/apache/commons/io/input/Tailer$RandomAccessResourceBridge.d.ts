import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Tailer$RandomAccessResourceBridge extends Closeable, Object{
    close(): void;
    getPointer(): number;
    read(arg0: number[]): number;
    seek(arg0: number): void;
}