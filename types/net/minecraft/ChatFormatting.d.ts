import type { Codec } from '../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class ChatFormatting extends Enum<ChatFormatting> implements StringRepresentable {
    static AQUA: ChatFormatting;
    static BLACK: ChatFormatting;
    static BLUE: ChatFormatting;
    static BOLD: ChatFormatting;
    static CODEC: Codec<ChatFormatting>;
    static COLOR_CODEC: Codec<ChatFormatting>;
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
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RED: ChatFormatting;
    static RESET: ChatFormatting;
    static STRIKETHROUGH: ChatFormatting;
    static UNDERLINE: ChatFormatting;
    static WHITE: ChatFormatting;
    static YELLOW: ChatFormatting;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static getByCode(paramcode: string): ChatFormatting;
    static getById(paramid: number): ChatFormatting;
    static getByName(paramname: string): ChatFormatting;
    static getNames(paramgetColors: boolean, paramgetFormats: boolean): E[];
    static keys(paramvalues: (Object | null)[]): Keyable;
    static stripFormatting(paraminput: string): string;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChatFormatting;
    static values(): (Object | null)[];
    private constructor(name: string, code: string, isFormat: boolean)
    private constructor(name: string, code: string, isFormat: boolean, id: number, color: number)
    private constructor(name: string, code: string, id: number, color: number)
    // private code: string;
    readonly color: number;
    readonly id: number;
    // private isFormat: boolean;
    readonly name: string;
    // private toString: string;
    getChar(): string;
    getColor(): number;
    getId(): number;
    getName(): string;
    getSerializedName(): string;
    isColor(): boolean;
    isFormat(): boolean;
    toString(): string;
    name(): "BLACK" | "DARK_BLUE" | "DARK_GREEN" | "DARK_AQUA" | "DARK_RED" | "DARK_PURPLE" | "GOLD" | "GRAY" | "DARK_GRAY" | "BLUE" | "GREEN" | "AQUA" | "RED" | "LIGHT_PURPLE" | "YELLOW" | "WHITE" | "OBFUSCATED" | "BOLD" | "STRIKETHROUGH" | "UNDERLINE" | "ITALIC" | "RESET";
}