import type { ViaCommandSender } from '../../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { ViaSubCommand } from '../../../../../com/viaversion/viaversion/api/command/ViaSubCommand.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ListSubCmd extends Object implements ViaSubCommand {
    constructor()
    description(): string;
    execute(arg0: ViaCommandSender, arg1: string[]): boolean;
    name(): string;
    onTabComplete(arg0: ViaCommandSender, arg1: string[]): string[];
    permission(): string;
    sendMessage(arg0: ViaCommandSender, arg1: string, ...arg2: Object[]): void;
    usage(): string;
}