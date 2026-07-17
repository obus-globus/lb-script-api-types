import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DragonRespawnStage;
    static values(): DragonRespawnStage[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    tick(level: ServerLevel, fight: EnderDragonFight, crystals: EndCrystal[], time: number): void;
    name(): "START" | "PREPARING_TO_SUMMON_PILLARS" | "SUMMONING_PILLARS" | "SUMMONING_DRAGON" | "END";
}