import type { WatchEvent$Kind } from '../../../java/nio/file/WatchEvent$Kind.d.ts'
import type { WatchEvent$Modifier } from '../../../java/nio/file/WatchEvent$Modifier.d.ts'
import type { WatchKey } from '../../../java/nio/file/WatchKey.d.ts'
import type { WatchService } from '../../../java/nio/file/WatchService.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Watchable extends Object{
    register(arg0: WatchService, arg1: WatchEvent$Kind<Object>[]): WatchKey;
    register(arg0: WatchService, arg1: WatchEvent$Kind<Object>[], arg2: WatchEvent$Modifier[]): WatchKey;
}