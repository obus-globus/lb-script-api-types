import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PacketIdentification extends Record {
    static from(paramevent: RecordedEvent): PacketIdentification;
    constructor(direction: string, protocolId: string, packetId: string)
    // private direction: string;
    // private packetId: string;
    // private protocolId: string;
    direction(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    packetId(): string;
    protocolId(): string;
    toString(): string;
}