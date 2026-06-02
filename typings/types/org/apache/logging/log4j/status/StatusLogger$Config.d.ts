import type { DateTimeFormatter } from '../../../../../java/time/format/DateTimeFormatter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
export class StatusLogger$Config extends Object {
    static getInstance(): StatusLogger$Config;
    private constructor()
    constructor(propertiesList: Properties[])
    constructor(debugEnabled: boolean, bufferCapacity: number, instantFormatter: DateTimeFormatter)
    private constructor(normalizedProperties: { [key: string]: Object })
    // private bufferCapacity: number;
    // private debugEnabled: boolean;
    // private fallbackListenerLevel: Level;
    // private instantFormatter: DateTimeFormatter;
}