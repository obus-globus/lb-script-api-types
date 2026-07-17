import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Level$ExplosionInteraction extends Enum<Level$ExplosionInteraction> implements StringRepresentable {
    static BLOCK: Level$ExplosionInteraction;
    static CODEC: Codec<Level$ExplosionInteraction>;
    static MOB: Level$ExplosionInteraction;
    static NONE: Level$ExplosionInteraction;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TNT: Level$ExplosionInteraction;
    static TRIGGER: Level$ExplosionInteraction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Level$ExplosionInteraction;
    static values(): Level$ExplosionInteraction[];
    private constructor(id: string)
    // private id: string;
    getSerializedName(): string;
    name(): "NONE" | "BLOCK" | "MOB" | "TNT" | "TRIGGER";
}