import type { ModuleBetterChat$MessageModifier } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/betterchat/ModuleBetterChat$MessageModifier.d.ts'
export class ModuleBetterChat$AppendSuffix extends ModuleBetterChat$MessageModifier {
    static INSTANCE: ModuleBetterChat$AppendSuffix;
    readonly suffix: string;
    getMessage(content: string): string;
}