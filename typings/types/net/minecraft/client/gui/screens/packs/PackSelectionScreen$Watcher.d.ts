import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { WatchService } from '../../../../../../java/nio/file/WatchService.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PackSelectionScreen$Watcher extends Object implements AutoCloseable {
    static create(parampackDir: Path[][]): PackSelectionScreen$Watcher;
    constructor(packPath: Path[])
    // private packPath: Path[];
    // private watcher: WatchService;
    close(): void;
    pollForChanges(): boolean;
    // private watchDir(packPath: Path[]): void;
}