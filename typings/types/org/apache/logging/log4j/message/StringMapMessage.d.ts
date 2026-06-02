import type { MapMessage } from '../../../../../org/apache/logging/log4j/message/MapMessage.d.ts'
export class StringMapMessage extends MapMessage<StringMapMessage, string> {
    constructor()
    constructor(initialCapacity: number)
    constructor(map: { [key: string]: string })
    newInstance(map: { [key: string]: string }): StringMapMessage;
}