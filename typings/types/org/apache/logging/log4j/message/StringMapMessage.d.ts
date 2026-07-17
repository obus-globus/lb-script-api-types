import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { MapMessage } from '../../../../../org/apache/logging/log4j/message/MapMessage.d.ts'
export class StringMapMessage extends MapMessage<StringMapMessage, string> {
    constructor()
    constructor(initialCapacity: number)
    constructor(map: JavaMap<string, string>)
    newInstance(map: JavaMap<string, string>): StringMapMessage;
}