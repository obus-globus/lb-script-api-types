import type { Record } from '../../../../java/lang/Record.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends Record {
    private constructor(id: UUID, url: URL, hash: string)
    // private hash: string;
    // private id: UUID;
    // private url: URL;
    equals(o: Object | null): boolean;
    hash(): string;
    hashCode(): number;
    id(): UUID;
    toString(): string;
    url(): URL;
}