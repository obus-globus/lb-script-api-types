import type { ViaCommandSender } from '../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { ViaSubCommand } from '../../../../com/viaversion/viaversion/api/command/ViaSubCommand.d.ts'
import type { ViaVersionCommand } from '../../../../com/viaversion/viaversion/api/command/ViaVersionCommand.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ViaCommandHandler extends Object implements ViaVersionCommand {
    constructor()
    constructor(arg0: boolean)
    // private commandMap: { [key: string]: ViaSubCommand };
    // private calculateAllowedCommands(arg0: ViaCommandSender): ViaSubCommand[];
    getSubCommand(arg0: string): ViaSubCommand;
    // private hasPermission(arg0: ViaCommandSender, arg1: string): boolean;
    hasSubCommand(arg0: string): boolean;
    onCommand(arg0: ViaCommandSender, arg1: string[]): boolean;
    onTabComplete(arg0: ViaCommandSender, arg1: string[]): string[];
    registerSubCommand(arg0: ViaSubCommand): void;
    removeSubCommand(arg0: string): void;
    showHelp(arg0: ViaCommandSender): void;
}