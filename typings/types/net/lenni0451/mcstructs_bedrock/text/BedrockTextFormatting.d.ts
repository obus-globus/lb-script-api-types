import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { BedrockTextFormatting$Type } from '../../../../net/lenni0451/mcstructs_bedrock/text/BedrockTextFormatting$Type.d.ts'
export class BedrockTextFormatting extends Enum<BedrockTextFormatting> {
    static ALL: { [key: string]: BedrockTextFormatting };
    static AQUA: BedrockTextFormatting;
    static BLACK: BedrockTextFormatting;
    static BLUE: BedrockTextFormatting;
    static BOLD: BedrockTextFormatting;
    static COLORS: { [key: string]: BedrockTextFormatting };
    static COLOR_CHAR: string;
    static DARK_AQUA: BedrockTextFormatting;
    static DARK_BLUE: BedrockTextFormatting;
    static DARK_GRAY: BedrockTextFormatting;
    static DARK_GREEN: BedrockTextFormatting;
    static DARK_PURPLE: BedrockTextFormatting;
    static DARK_RED: BedrockTextFormatting;
    static FORMATTINGS: { [key: string]: BedrockTextFormatting };
    static GOLD: BedrockTextFormatting;
    static GRAY: BedrockTextFormatting;
    static GREEN: BedrockTextFormatting;
    static ITALIC: BedrockTextFormatting;
    static LIGHT_PURPLE: BedrockTextFormatting;
    static MATERIAL_AMETHYST: BedrockTextFormatting;
    static MATERIAL_COPPER: BedrockTextFormatting;
    static MATERIAL_DIAMOND: BedrockTextFormatting;
    static MATERIAL_EMERALD: BedrockTextFormatting;
    static MATERIAL_GOLD: BedrockTextFormatting;
    static MATERIAL_IRON: BedrockTextFormatting;
    static MATERIAL_LAPIS: BedrockTextFormatting;
    static MATERIAL_NETHERITE: BedrockTextFormatting;
    static MATERIAL_QUARTZ: BedrockTextFormatting;
    static MATERIAL_REDSTONE: BedrockTextFormatting;
    static MATERIAL_RESIN: BedrockTextFormatting;
    static MINECOIN_GOLD: BedrockTextFormatting;
    static OBFUSCATED: BedrockTextFormatting;
    static RED: BedrockTextFormatting;
    static RESET: BedrockTextFormatting;
    static WHITE: BedrockTextFormatting;
    static YELLOW: BedrockTextFormatting;
    static getByCode(paramarg0: string): BedrockTextFormatting;
    static getByName(paramarg0: string): BedrockTextFormatting;
    static getByOrdinal(paramarg0: number): BedrockTextFormatting;
    static getClosestFormattingColor(paramarg0: number): BedrockTextFormatting;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BedrockTextFormatting;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: string)
    private constructor(arg2: string, arg3: string, arg4: number)
    readonly code: string;
    readonly name: string;
    readonly rgbValue: number;
    // private type: BedrockTextFormatting$Type;
    asString(): string;
    getCode(): string;
    getName(): string;
    getRgbValue(): number;
    isColor(): boolean;
    isFormatting(): boolean;
    name(): "BLACK" | "DARK_BLUE" | "DARK_GREEN" | "DARK_AQUA" | "DARK_RED" | "DARK_PURPLE" | "GOLD" | "GRAY" | "DARK_GRAY" | "BLUE" | "GREEN" | "AQUA" | "RED" | "LIGHT_PURPLE" | "YELLOW" | "WHITE" | "MINECOIN_GOLD" | "MATERIAL_QUARTZ" | "MATERIAL_IRON" | "MATERIAL_NETHERITE" | "MATERIAL_REDSTONE" | "MATERIAL_COPPER" | "MATERIAL_GOLD" | "MATERIAL_EMERALD" | "MATERIAL_DIAMOND" | "MATERIAL_LAPIS" | "MATERIAL_AMETHYST" | "MATERIAL_RESIN" | "OBFUSCATED" | "BOLD" | "ITALIC" | "RESET";
}