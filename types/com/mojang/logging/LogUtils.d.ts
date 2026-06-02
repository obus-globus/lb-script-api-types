import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
export class LogUtils extends Object {
    static FATAL_MARKER: Marker;
    static FATAL_MARKER_ID: string;
    static configureRootLoggingLevel(paramarg0: Level): void;
    static defer(paramarg0: () => Object): Object;
    static getLogger(): Logger;
    static isLoggerActive(): boolean;
    constructor()
}