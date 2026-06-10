import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class GossipType extends Enum<GossipType> implements StringRepresentable {
    static CODEC: Codec<GossipType>;
    static MAJOR_NEGATIVE: GossipType;
    static MAJOR_POSITIVE: GossipType;
    static MINOR_NEGATIVE: GossipType;
    static MINOR_POSITIVE: GossipType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REPUTATION_CHANGE_PER_EVENT: number;
    static REPUTATION_CHANGE_PER_EVERLASTING_MEMORY: number;
    static REPUTATION_CHANGE_PER_TRADE: number;
    static TRADING: GossipType;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GossipType;
    static values(): (Object | null)[];
    private constructor(id: string, weight: number, max: number, decayPerDay: number, decayPerTransfer: number)
    decayPerDay: number;
    decayPerTransfer: number;
    id: string;
    max: number;
    weight: number;
    getSerializedName(): string;
    name(): "MAJOR_NEGATIVE" | "MINOR_NEGATIVE" | "MINOR_POSITIVE" | "MAJOR_POSITIVE" | "TRADING";
}