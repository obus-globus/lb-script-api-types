import type { ModuleBetterChat$MessageModifier } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/betterchat/ModuleBetterChat$MessageModifier.d.ts'
export class ModuleBetterChat$AppendPrefix extends ModuleBetterChat$MessageModifier {
    static INSTANCE: ModuleBetterChat$AppendPrefix;
    readonly prefix: string;
    getMessage(content: string): string;
}