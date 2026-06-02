import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileCleaningTracker } from '../../../../org/apache/commons/io/FileCleaningTracker.d.ts'
import type { FileDeleteStrategy } from '../../../../org/apache/commons/io/FileDeleteStrategy.d.ts'
export class FileCleaner extends Object {
    static exitWhenFinished(): void;
    static getInstance(): FileCleaningTracker;
    static getTrackCount(): number;
    static track(paramarg0: File, paramarg1: Object): void;
    static track(paramarg0: File, paramarg1: Object, paramarg2: FileDeleteStrategy): void;
    static track(paramarg0: string, paramarg1: Object): void;
    static track(paramarg0: string, paramarg1: Object, paramarg2: FileDeleteStrategy): void;
    constructor()
}