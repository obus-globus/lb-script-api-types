import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WatchManager } from '../../../../../../org/apache/logging/log4j/core/util/WatchManager.d.ts'
export interface WatchEventService extends Object{
    subscribe(manager: WatchManager): void;
    unsubscribe(manager: WatchManager): void;
}