import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MobCategory;
    static values(): MobCategory[];
    private constructor(name: string, debugAbbreviation: string, max: number, isFriendly: boolean, isPersistent: boolean, despawnDistance: number)
    readonly debugAbbreviation: string;
    readonly despawnDistance: number;
    // private isFriendly: boolean;
    // private isPersistent: boolean;
    // private max: number;
    readonly noDespawnDistance: number;
    getDebugAbbreviation(): string;
    getDespawnDistance(): number;
    getMaxInstancesPerChunk(): number;
    getName(): string;
    getNoDespawnDistance(): number;
    getSerializedName(): string;
    isFriendly(): boolean;
    isPersistent(): boolean;
    name(): "MONSTER" | "CREATURE" | "AMBIENT" | "AXOLOTLS" | "UNDERGROUND_WATER_CREATURE" | "WATER_CREATURE" | "WATER_AMBIENT" | "MISC";
}