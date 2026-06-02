import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandOriginType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/CommandOriginType.d.ts'
export class CommandOriginData extends Record {
    // private requestId: string;
    // private type: CommandOriginType;
    // private uniquePlayerId: number;
    // private uuid: UUID;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    requestId(): string;
    toString(): string;
    type(): CommandOriginType;
    uniquePlayerId(): number;
    uuid(): UUID;
}