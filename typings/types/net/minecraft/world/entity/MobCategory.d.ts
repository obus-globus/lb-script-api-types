import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class MobCategory extends Enum<MobCategory> implements StringRepresentable {
    static AMBIENT: MobCategory;
    static AXOLOTLS: MobCategory;
    static CODEC: Codec<MobCategory>;
    static CREATURE: MobCategory;
    static MISC: MobCategory;
    static MONSTER: MobCategory;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UNDERGROUND_WATER_CREATURE: MobCategory;
    static WATER_AMBIENT: MobCategory;
    static WATER_CREATURE: MobCategory;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MobCategory;
    static values(): (Object | null)[];
    private constructor(name: string, max: number, isFriendly: boolean, isPersistent: boolean, despawnDistance: number)
    readonly despawnDistance: number;
    // private isFriendly: boolean;
    // private isPersistent: boolean;
    // private max: number;
    readonly name: string;
    readonly noDespawnDistance: number;
    getDespawnDistance(): number;
    getMaxInstancesPerChunk(): number;
    getName(): string;
    getNoDespawnDistance(): number;
    getSerializedName(): string;
    isFriendly(): boolean;
    isPersistent(): boolean;
    name(): "MONSTER" | "CREATURE" | "AMBIENT" | "AXOLOTLS" | "UNDERGROUND_WATER_CREATURE" | "WATER_CREATURE" | "WATER_AMBIENT" | "MISC";
}