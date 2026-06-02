import type { WatchEvent } from '../../../java/nio/file/WatchEvent.d.ts'
import type { Watchable } from '../../../java/nio/file/Watchable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WatchKey extends Object{
    cancel(): void;
    isValid(): boolean;
    pollEvents(): WatchEvent<Object>[];
    reset(): boolean;
    watchable(): Watchable;
}