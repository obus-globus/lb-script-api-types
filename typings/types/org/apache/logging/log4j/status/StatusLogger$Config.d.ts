import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DateTimeFormatter } from '../../../../../java/time/format/DateTimeFormatter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
export class StatusLogger$Config extends Object {
    static getInstance(): StatusLogger$Config;
    constructor(...propertiesList: JavaMap<any, any>[])
    constructor(debugEnabled: boolean, bufferCapacity: number, instantFormatter: DateTimeFormatter)
    // private bufferCapacity: number;
    // private debugEnabled: boolean;
    // private fallbackListenerLevel: Level;
    // private instantFormatter: DateTimeFormatter;
}