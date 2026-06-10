import type { File } from '../../../../java/io/File.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileCleaningTracker$Tracker } from '../../../../org/apache/commons/io/FileCleaningTracker$Tracker.d.ts'
import type { FileDeleteStrategy } from '../../../../org/apache/commons/io/FileDeleteStrategy.d.ts'
export class FileCleaningTracker extends Object {
    constructor()
    readonly deleteFailures: string[];
    // private exitWhenFinished: boolean;
    // private q: ReferenceQueue<Object>;
    // private reaper: Thread;
    // private trackers: FileCleaningTracker$Tracker[];
    // private addTracker(arg0: string, arg1: Object, arg2: FileDeleteStrategy): void;
    exitWhenFinished(): void;
    getDeleteFailures(): string[];
    getTrackCount(): number;
    track(arg0: File, arg1: Object): void;
    track(arg0: File, arg1: Object, arg2: FileDeleteStrategy): void;
    track(arg0: Path[], arg1: Object): void;
    track(arg0: Path[], arg1: Object, arg2: FileDeleteStrategy): void;
    track(arg0: string, arg1: Object): void;
    track(arg0: string, arg1: Object, arg2: FileDeleteStrategy): void;
}