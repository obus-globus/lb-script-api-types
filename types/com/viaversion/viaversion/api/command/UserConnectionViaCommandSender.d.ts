import type { ViaCommandSender } from '../../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserConnectionViaCommandSender extends Object implements ViaCommandSender {
    constructor(arg0: UserConnection)
    // private connection: UserConnection;
    getName(): string;
    getUUID(): UUID;
    hasPermission(arg0: string): boolean;
    sendMessage(arg0: string): void;
}