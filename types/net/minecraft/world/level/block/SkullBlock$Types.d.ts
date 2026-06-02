import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { SkullBlock$Type } from '../../../../../net/minecraft/world/level/block/SkullBlock$Type.d.ts'
export class SkullBlock$Types extends Enum<SkullBlock$Types> implements SkullBlock$Type {
    static CODEC: Codec<SkullBlock$Type>;
    static CREEPER: SkullBlock$Types;
    static DRAGON: SkullBlock$Types;
    static PIGLIN: SkullBlock$Types;
    static PLAYER: SkullBlock$Types;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SKELETON: SkullBlock$Types;
    static TYPES: { [key: string]: SkullBlock$Type };
    static WITHER_SKELETON: SkullBlock$Types;
    static ZOMBIE: SkullBlock$Types;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SkullBlock$Types;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "SKELETON" | "WITHER_SKELETON" | "PLAYER" | "ZOMBIE" | "CREEPER" | "PIGLIN" | "DRAGON";
}