import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class HeightmapType extends Enum<HeightmapType> {
    static MOTION_BLOCKING: HeightmapType;
    static MOTION_BLOCKING_NO_LEAVES: HeightmapType;
    static OCEAN_FLOOR: HeightmapType;
    static OCEAN_FLOOR_WG: HeightmapType;
    static WORLD_SURFACE: HeightmapType;
    static WORLD_SURFACE_WG: HeightmapType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HeightmapType;
    static values(): HeightmapType[];
    private constructor()
    name(): "WORLD_SURFACE_WG" | "WORLD_SURFACE" | "OCEAN_FLOOR_WG" | "OCEAN_FLOOR" | "MOTION_BLOCKING" | "MOTION_BLOCKING_NO_LEAVES";
}