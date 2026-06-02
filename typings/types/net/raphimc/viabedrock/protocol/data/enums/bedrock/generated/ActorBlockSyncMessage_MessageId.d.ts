import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ActorBlockSyncMessage_MessageId extends Enum<ActorBlockSyncMessage_MessageId> {
    static CREATE: ActorBlockSyncMessage_MessageId;
    static DESTROY: ActorBlockSyncMessage_MessageId;
    static NONE: ActorBlockSyncMessage_MessageId;
    static getByName(paramarg0: string): ActorBlockSyncMessage_MessageId;
    static getByName(paramarg0: string, paramarg1: ActorBlockSyncMessage_MessageId): ActorBlockSyncMessage_MessageId;
    static getByValue(paramarg0: number): ActorBlockSyncMessage_MessageId;
    static getByValue(paramarg0: number, paramarg1: ActorBlockSyncMessage_MessageId): ActorBlockSyncMessage_MessageId;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ActorBlockSyncMessage_MessageId;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ActorBlockSyncMessage_MessageId)
    readonly value: number;
    getValue(): number;
    name(): "NONE" | "CREATE" | "DESTROY";
}