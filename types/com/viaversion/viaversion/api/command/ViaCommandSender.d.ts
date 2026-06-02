import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ViaCommandSender extends Object{
    getName(): string;
    getUUID(): UUID;
    hasPermission(arg0: string): boolean;
    sendMessage(arg0: string): void;
}