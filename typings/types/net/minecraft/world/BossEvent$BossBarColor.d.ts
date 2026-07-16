import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../net/minecraft/ChatFormatting.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class BossEvent$BossBarColor extends Enum<BossEvent$BossBarColor> implements StringRepresentable {
    static BLUE: BossEvent$BossBarColor;
    static CODEC: Codec<BossEvent$BossBarColor>;
    static GREEN: BossEvent$BossBarColor;
    static PINK: BossEvent$BossBarColor;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static PURPLE: BossEvent$BossBarColor;
    static RED: BossEvent$BossBarColor;
    static WHITE: BossEvent$BossBarColor;
    static YELLOW: BossEvent$BossBarColor;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BossEvent$BossBarColor;
    static values(): BossEvent$BossBarColor[];
    private constructor(name: string, formatting: ChatFormatting)
    readonly formatting: ChatFormatting;
    getFormatting(): ChatFormatting;
    getName(): string;
    getSerializedName(): string;
    name(): "PINK" | "BLUE" | "RED" | "GREEN" | "YELLOW" | "PURPLE" | "WHITE";
}