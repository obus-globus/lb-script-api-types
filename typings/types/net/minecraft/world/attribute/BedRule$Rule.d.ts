import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class BedRule$Rule extends Enum<BedRule$Rule> implements StringRepresentable {
    static ALWAYS: BedRule$Rule;
    static CODEC: Codec<BedRule$Rule>;
    static NEVER: BedRule$Rule;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WHEN_DARK: BedRule$Rule;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BedRule$Rule;
    static values(): BedRule$Rule[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    test(level: Level): boolean;
    name(): "ALWAYS" | "WHEN_DARK" | "NEVER";
}