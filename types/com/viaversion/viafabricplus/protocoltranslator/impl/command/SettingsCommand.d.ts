import type { VFPSubCommand } from '../../../../../../com/viaversion/viafabricplus/protocoltranslator/impl/command/VFPSubCommand.d.ts'
import type { ViaCommandSender } from '../../../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SettingsCommand extends Object implements VFPSubCommand {
    constructor()
    description(): string;
    execute(arg0: ViaCommandSender, arg1: string[]): boolean;
    getUser(): UserConnection;
    name(): string;
    sendMessage(arg0: ViaCommandSender, arg1: string): void;
}