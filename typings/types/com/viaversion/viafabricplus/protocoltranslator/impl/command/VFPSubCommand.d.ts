import type { ViaCommandSender } from '../../../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { ViaSubCommand } from '../../../../../../com/viaversion/viaversion/api/command/ViaSubCommand.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface VFPSubCommand extends ViaSubCommand, Object{
    description(): string;
    getUser(): UserConnection;
    name(): string;
    onTabComplete(arg0: ViaCommandSender, arg1: string[]): string[];
    permission(): string;
    sendMessage(arg0: ViaCommandSender, arg1: string): void;
    sendMessage(arg0: ViaCommandSender, arg1: string, ...arg2: Object[]): void;
    usage(): string;
}