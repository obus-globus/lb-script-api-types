import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CaveSurface extends Enum<CaveSurface> implements StringRepresentable {
    static CEILING: CaveSurface;
    static CODEC: Codec<CaveSurface>;
    static FLOOR: CaveSurface;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CaveSurface;
    static values(): CaveSurface[];
    private constructor(direction: Direction, y: number, id: string)
    readonly direction: Direction;
    // private id: string;
    readonly y: number;
    getDirection(): Direction;
    getSerializedName(): string;
    getY(): number;
    name(): "CEILING" | "FLOOR";
}