import type { ViaCommandSender } from '../../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ViaSubCommand extends Object{
    description(): string;
    execute(arg0: ViaCommandSender, arg1: string[]): boolean;
    name(): string;
    onTabComplete(arg0: ViaCommandSender, arg1: string[]): string[];
    permission(): string;
    sendMessage(arg0: ViaCommandSender, arg1: string, ...arg2: Object[]): void;
    usage(): string;
}