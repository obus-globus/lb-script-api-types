import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class BossEvent$BossBarOverlay extends Enum<BossEvent$BossBarOverlay> implements StringRepresentable {
    static CODEC: Codec<BossEvent$BossBarOverlay>;
    static NOTCHED_10: BossEvent$BossBarOverlay;
    static NOTCHED_12: BossEvent$BossBarOverlay;
    static NOTCHED_20: BossEvent$BossBarOverlay;
    static NOTCHED_6: BossEvent$BossBarOverlay;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static PROGRESS: BossEvent$BossBarOverlay;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BossEvent$BossBarOverlay;
    static values(): BossEvent$BossBarOverlay[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    name(): "PROGRESS" | "NOTCHED_6" | "NOTCHED_10" | "NOTCHED_12" | "NOTCHED_20";
}