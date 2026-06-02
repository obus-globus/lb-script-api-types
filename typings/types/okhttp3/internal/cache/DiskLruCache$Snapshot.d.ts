import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiskLruCache$Editor } from '../../../okhttp3/internal/cache/DiskLruCache$Editor.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class DiskLruCache$Snapshot extends Object implements Closeable {
    constructor(null_: DiskLruCache$Snapshot, key: string, sequenceNumber: number, sources: Source[], lengths: number[])
    // private key: string;
    // private lengths: number[];
    // private sequenceNumber: number;
    // private sources: Source[];
    close(): void;
    edit(): DiskLruCache$Editor | null;
    getLength(index: number): number;
    getSource(index: number): Source;
    key(): string;
}