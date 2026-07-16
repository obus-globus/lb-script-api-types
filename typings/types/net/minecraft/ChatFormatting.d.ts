import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ChatFormatting extends Enum<ChatFormatting> {
    static AQUA: ChatFormatting;
    static BLACK: ChatFormatting;
    static BLUE: ChatFormatting;
    static BOLD: ChatFormatting;
    static DARK_AQUA: ChatFormatting;
    static DARK_BLUE: ChatFormatting;
    static DARK_GRAY: ChatFormatting;
    static DARK_GREEN: ChatFormatting;
    static DARK_PURPLE: ChatFormatting;
    static DARK_RED: ChatFormatting;
    static GOLD: ChatFormatting;
    static GRAY: ChatFormatting;
    static GREEN: ChatFormatting;
    static ITALIC: ChatFormatting;
    static LIGHT_PURPLE: ChatFormatting;
    static OBFUSCATED: ChatFormatting;
    static PREFIX_CODE: string;
    static RED: ChatFormatting;
    static RESET: ChatFormatting;
    static STRIKETHROUGH: ChatFormatting;
    static UNDERLINE: ChatFormatting;
    static WHITE: ChatFormatting;
    static YELLOW: ChatFormatting;
    static getByCode(paramcode: string): ChatFormatting;
    static stripFormatting(paraminput: string): string;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChatFormatting;
    static values(): ChatFormatting[];
    private constructor(code: string)
    // private code: string;
    // private toString: string;
    toString(): string;
    name(): "BLACK" | "DARK_BLUE" | "DARK_GREEN" | "DARK_AQUA" | "DARK_RED" | "DARK_PURPLE" | "GOLD" | "GRAY" | "DARK_GRAY" | "BLUE" | "GREEN" | "AQUA" | "RED" | "LIGHT_PURPLE" | "YELLOW" | "WHITE" | "OBFUSCATED" | "BOLD" | "STRIKETHROUGH" | "UNDERLINE" | "ITALIC" | "RESET";
}