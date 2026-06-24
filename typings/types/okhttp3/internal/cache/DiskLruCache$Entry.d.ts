import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiskLruCache } from '../../../okhttp3/internal/cache/DiskLruCache.d.ts'
import type { DiskLruCache$Editor } from '../../../okhttp3/internal/cache/DiskLruCache$Editor.d.ts'
import type { DiskLruCache$Snapshot } from '../../../okhttp3/internal/cache/DiskLruCache$Snapshot.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
import type { Path } from '../../../okio/Path.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class DiskLruCache$Entry extends Object {
    constructor(null_: DiskLruCache, key: string)
    // private cleanFiles: Path[];
    /*not mapped: */ getCleanFiles$okhttp(): Path[];
    // private currentEditor: DiskLruCache$Editor | null;
    /*not mapped: */ getCurrentEditor$okhttp(): DiskLruCache$Editor | null;
    // private dirtyFiles: Path[];
    /*not mapped: */ getDirtyFiles$okhttp(): Path[];
    // private key: string;
    /*not mapped: */ getKey$okhttp(): string;
    // private lengths: number[];
    /*not mapped: */ getLengths$okhttp(): number[];
    // private lockingSourceCount: number;
    /*not mapped: */ getLockingSourceCount$okhttp(): number;
    // private readable: boolean;
    /*not mapped: */ getReadable$okhttp(): boolean;
    // private sequenceNumber: number;
    /*not mapped: */ getSequenceNumber$okhttp(): number;
    // private zombie: boolean;
    /*not mapped: */ getZombie$okhttp(): boolean;
    // private invalidLengths(strings: string[]): void;
    // private newSource(index: number): Source;
    setLengths(strings: string[]): void;
    snapshot(): DiskLruCache$Snapshot | null;
    writeLengths(writer: BufferedSink): void;
}