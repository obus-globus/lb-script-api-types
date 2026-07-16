import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { EndCrystal } from '../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
import type { EnderDragonFight } from '../../../../../../net/minecraft/world/level/dimension/end/EnderDragonFight.d.ts'
export class DragonRespawnStage extends Enum<DragonRespawnStage> implements StringRepresentable {
    static CODEC: Codec<DragonRespawnStage>;
    static END: DragonRespawnStage;
    static PREPARING_TO_SUMMON_PILLARS: DragonRespawnStage;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static START: DragonRespawnStage;
    static SUMMONING_DRAGON: DragonRespawnStage;
    static SUMMONING_PILLARS: DragonRespawnStage;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DragonRespawnStage;
    static values(): DragonRespawnStage[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    tick(level: ServerLevel, fight: EnderDragonFight, crystals: EndCrystal[], time: number): void;
    name(): "START" | "PREPARING_TO_SUMMON_PILLARS" | "SUMMONING_PILLARS" | "SUMMONING_DRAGON" | "END";
}