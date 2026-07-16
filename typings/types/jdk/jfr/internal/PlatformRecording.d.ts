import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { TimerTask } from '../../../java/util/TimerTask.d.ts'
import type { Configuration } from '../../../jdk/jfr/Configuration.d.ts'
import type { Recording } from '../../../jdk/jfr/Recording.d.ts'
import type { RecordingState } from '../../../jdk/jfr/RecordingState.d.ts'
import type { PlatformRecorder } from '../../../jdk/jfr/internal/PlatformRecorder.d.ts'
import type { RepositoryChunk } from '../../../jdk/jfr/internal/RepositoryChunk.d.ts'
import type { WriteablePath } from '../../../jdk/jfr/internal/WriteablePath.d.ts'
import type { Report } from '../../../jdk/jfr/internal/query/Report.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PlatformRecording extends Object implements AutoCloseable {
    constructor(arg0: PlatformRecorder, arg1: number)
    readonly chunks: RepositoryChunk[];
    readonly destination: WriteablePath;
    readonly dumpDirectory: Path;
    readonly dumpOnExit: boolean;
    readonly duration: Duration;
    // private finalStartChunkNanos: number;
    readonly flushInterval: Duration;
    readonly id: number;
    readonly maxAge: Duration;
    readonly maxSize: number;
    readonly name: string;
    // private recorder: PlatformRecorder;
    readonly recording: Recording;
    readonly reports: Report[];
    readonly settings: { [key: string]: string };
    // private shouldWriteActiveRecordingEvent: boolean;
    readonly size: number;
    readonly startNanos: number;
    // private startTask: TimerTask;
    readonly startTime: Instant;
    readonly state: RecordingState;
    // private stopTask: TimerTask;
    readonly stopTime: Instant;
    readonly toDisk: boolean;
    add(arg0: RepositoryChunk): void;
    addReport(arg0: Report): void;
    // private added(arg0: RepositoryChunk): void;
    appendChunk(arg0: RepositoryChunk): void;
    checkSetDestination(arg0: WriteablePath): void;
    clearDestination(): void;
    close(): void;
    // private createStartTask(): TimerTask;
    createStopTask(): TimerTask;
    dump(arg0: WriteablePath): void;
    dumpStopped(arg0: WriteablePath): void;
    // private ensureNotClosed(): void;
    // private ensureOkForSchedule(): void;
    filter(arg0: Instant, arg1: Instant, arg2: number): void;
    getChunks(): RepositoryChunk[];
    getDestination(): WriteablePath;
    getDumpOnExit(): boolean;
    getDuration(): Duration;
    getFinalChunkStartNanos(): number;
    getFlushInterval(): Duration;
    getId(): number;
    getMaxAge(): Duration;
    getMaxSize(): number;
    getName(): string;
    getRecording(): Recording;
    getReports(): Report[];
    getSettings(): { [key: string]: string };
    getSize(): number;
    getStartNanos(): number;
    getStartTime(): Instant;
    getState(): RecordingState;
    getStopTime(): Instant;
    getStreamIntervalMillis(): number;
    isToDisk(): boolean;
    makeDumpPath(): WriteablePath;
    newCopy(arg0: boolean): Recording;
    newSnapshotClone(arg0: string, arg1: boolean): PlatformRecording;
    // private notifyIfStateChanged(arg0: RecordingState, arg1: RecordingState): void;
    open(arg0: Instant, arg1: Instant): InputStream;
    removeBefore(arg0: Instant): void;
    removeNonExistantPaths(): void;
    removePath(arg0: Path): void;
    // private removed(arg0: RepositoryChunk): void;
    scheduleStart(arg0: Duration): void;
    scheduleStart(arg0: Instant): void;
    setConfiguration(arg0: Configuration): void;
    setDestination(arg0: WriteablePath): void;
    setDumpDirectory(arg0: Path): void;
    setDumpOnExit(arg0: boolean): void;
    setDuration(arg0: Duration): void;
    setFinalStartnanos(arg0: number): void;
    setFlushInterval(arg0: Duration): void;
    setInternalDuration(arg0: Duration): void;
    setMaxAge(arg0: Duration): void;
    setMaxSize(arg0: number): void;
    setName(arg0: string): void;
    setRecording(arg0: Recording): void;
    setSetting(arg0: string, arg1: string): void;
    setSettings(arg0: { [key: string]: string }): void;
    // private setSettings(arg0: { [key: string]: string }, arg1: boolean): void;
    setShouldWriteActiveRecordingEvent(arg0: boolean): void;
    setStartTime(arg0: Instant): void;
    setState(arg0: RecordingState): void;
    setStopTask(arg0: TimerTask): void;
    setStopTime(arg0: Instant): void;
    setToDisk(arg0: boolean): void;
    shouldWriteMetadataEvent(): boolean;
    start(): number;
    stop(arg0: string): boolean;
    toString(): string;
    // private transferChunks(arg0: WriteablePath): void;
    // private transferChunksWithRetry(arg0: WriteablePath): void;
    // private trimToAge(arg0: Instant): void;
    // private trimToSize(): void;
    updateTimer(): void;
}