import type { ViaCommandSender } from '../../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { ViaSubCommand } from '../../../../../com/viaversion/viaversion/api/command/ViaSubCommand.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ViaVersionCommand extends Object{
    getSubCommand(arg0: string): ViaSubCommand;
    hasSubCommand(arg0: string): boolean;
    onCommand(arg0: ViaCommandSender, arg1: string[]): boolean;
    onTabComplete(arg0: ViaCommandSender, arg1: string[]): string[];
    registerSubCommand(arg0: ViaSubCommand): void;
    removeSubCommand(arg0: string): void;
    showHelp(arg0: ViaCommandSender): void;
}