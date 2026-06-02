import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { Timer } from '../../../java/util/Timer.d.ts'
import type { FlightRecorder } from '../../../jdk/jfr/FlightRecorder.d.ts'
import type { FlightRecorderListener } from '../../../jdk/jfr/FlightRecorderListener.d.ts'
import type { Recording } from '../../../jdk/jfr/Recording.d.ts'
import type { PlatformRecording } from '../../../jdk/jfr/internal/PlatformRecording.d.ts'
import type { Repository } from '../../../jdk/jfr/internal/Repository.d.ts'
import type { RepositoryChunk } from '../../../jdk/jfr/internal/RepositoryChunk.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PlatformRecorder extends Object {
    static addListener(paramarg0: FlightRecorderListener): void;
    static notifyRecorderInitialized(paramarg0: FlightRecorder): void;
    static removeListener(paramarg0: FlightRecorderListener): boolean;
    constructor()
    readonly currentChunk: RepositoryChunk;
    // private recordingCounter: number;
    readonly recordings: PlatformRecording[];
    // private repository: Repository;
    // private runPeriodicTask: boolean;
    // private shutdownHook: Thread;
    // private timer: Timer;
    destroy(): void;
    // private disableEvents(): void;
    // private dumpMemoryToDestination(arg0: PlatformRecording): Instant;
    // private fillWithDiskChunks(arg0: PlatformRecording): void;
    fillWithRecordedData(arg0: PlatformRecording, arg1: boolean): void;
    finish(arg0: PlatformRecording): void;
    // private finishChunk(arg0: RepositoryChunk, arg1: Instant, arg2: PlatformRecording): void;
    flush(): void;
    getCurrentChunk(): RepositoryChunk;
    getRecordings(): PlatformRecording[];
    // private getRunningRecordings(): PlatformRecording[];
    getTimer(): Timer;
    // private isToDisk(): boolean;
    makeChunkList(arg0: Instant, arg1: Instant): RepositoryChunk[];
    migrate(arg0: Path[]): void;
    newCopy(arg0: PlatformRecording, arg1: boolean): Recording;
    newRecording(arg0: { [key: string]: string }): PlatformRecording;
    // private newRecording(arg0: { [key: string]: string }, arg1: number): PlatformRecording;
    newTemporaryRecording(): PlatformRecording;
    // private periodicTask(): void;
    rotateDisk(): void;
    // private setRunPeriodicTask(arg0: boolean): void;
    start(arg0: PlatformRecording): number;
    // private startDiskMonitor(): void;
    stop(arg0: PlatformRecording): void;
    // private takeNap(arg0: number): void;
    updateSettings(arg0: boolean): void;
    updateSettingsButIgnoreRecording(arg0: PlatformRecording, arg1: boolean): void;
    // private writeMetaEvents(): void;
    // private writeReports(): void;
}