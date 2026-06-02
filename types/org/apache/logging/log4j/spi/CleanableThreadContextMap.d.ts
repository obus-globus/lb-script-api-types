import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadContextMap2 } from '../../../../../org/apache/logging/log4j/spi/ThreadContextMap2.d.ts'
export interface CleanableThreadContextMap extends Object, ThreadContextMap2{
    removeAll(keys: string[]): void;
}