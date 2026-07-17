import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Flushable } from '../../../java/io/Flushable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Regex } from '../../../kotlin/text/Regex.d.ts'
import type { DiskLruCache$Companion } from '../../../okhttp3/internal/cache/DiskLruCache$Companion.d.ts'
import type { DiskLruCache$Editor } from '../../../okhttp3/internal/cache/DiskLruCache$Editor.d.ts'
import type { DiskLruCache$Entry } from '../../../okhttp3/internal/cache/DiskLruCache$Entry.d.ts'
import type { DiskLruCache$Snapshot } from '../../../okhttp3/internal/cache/DiskLruCache$Snapshot.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
import type { FileSystem } from '../../../okio/FileSystem.d.ts'
import type { Path } from '../../../okio/Path.d.ts'
export class DiskLruCache extends Object implements Closeable, Flushable, Lockable {
    static ANY_SEQUENCE_NUMBER: number;
    static CLEAN: string;
    static Companion: DiskLruCache$Companion;
    static DIRTY: string;
    static JOURNAL_FILE: string;
    static JOURNAL_FILE_BACKUP: string;
    static JOURNAL_FILE_TEMP: string;
    static LEGAL_KEY_PATTERN: Regex;
    static MAGIC: string;
    static READ: string;
    static REMOVE: string;
    static VERSION_1: string;
    constructor(fileSystem: FileSystem, directory: Path, appVersion: number, valueCount: number, maxSize: number, taskRunner: TaskRunner)
    // private appVersion: number;
    // private civilizedFileSystem: boolean;
    // private cleanupQueue: TaskQueue;
    // private cleanupTask: Task;
    closed: boolean;
    readonly directory: Path;
    // private fileSystem: FileSystem;
    /*not mapped: */ getFileSystem$okhttp(): FileSystem;
    // private hasJournalErrors: boolean;
    // private initialized: boolean;
    // private journalFile: Path;
    // private journalFileBackup: Path;
    // private journalFileTmp: Path;
    // private journalWriter: BufferedSink | null;
    // private lruEntries: JavaMap<string, DiskLruCache$Entry>;
    /*not mapped: */ getLruEntries$okhttp(): JavaMap<string, DiskLruCache$Entry>;
    maxSize: number;
    // private mostRecentRebuildFailed: boolean;
    // private mostRecentTrimFailed: boolean;
    // private nextSequenceNumber: number;
    // private redundantOpCount: number;
    // private size: number;
    // private valueCount: number;
    /*not mapped: */ getValueCount$okhttp(): number;
    // private checkNotClosed(): void;
    close(): void;
    completeEdit(editor: DiskLruCache$Editor, success: boolean): void;
    delete(): void;
    edit(key: string, expectedSequenceNumber?: number): DiskLruCache$Editor | null;
    evictAll(): void;
    flush(): void;
    get(key: string): DiskLruCache$Snapshot | null;
    initialize(): void;
    isClosed(): boolean;
    // private journalRebuildRequired(): boolean;
    // private newJournalWriter(): BufferedSink;
    // private processJournal(): void;
    // private readJournal(): void;
    // private readJournalLine(line: string): void;
    rebuildJournal(): void;
    remove(key: string): boolean;
    removeEntry(entry: DiskLruCache$Entry): boolean;
    // private removeOldestEntry(): boolean;
    size(): number;
    snapshots(): Iterator<DiskLruCache$Snapshot>;
    trimToSize(): void;
    // private validateKey(key: string): void;
}