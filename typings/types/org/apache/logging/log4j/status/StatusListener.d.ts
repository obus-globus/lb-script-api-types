import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { EventListener } from '../../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { StatusData } from '../../../../../org/apache/logging/log4j/status/StatusData.d.ts'
export interface StatusListener extends Closeable, EventListener, Object{
    close(): void;
    getStatusLevel(): Level;
    log(data: StatusData): void;
}