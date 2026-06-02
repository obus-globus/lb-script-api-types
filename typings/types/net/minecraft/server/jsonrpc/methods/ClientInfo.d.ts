import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClientInfo extends Record {
    static of(paramconnectionId: number): ClientInfo;
    constructor(connectionId: number)
    // private connectionId: number;
    connectionId(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}