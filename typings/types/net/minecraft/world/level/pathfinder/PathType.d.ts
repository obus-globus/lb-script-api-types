import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PathType extends Enum<PathType> {
    static BIG_MOBS_CLOSE_TO_DANGER: PathType;
    static BLOCKED: PathType;
    static BREACH: PathType;
    static COCOA: PathType;
    static DAMAGE_CAUTIOUS: PathType;
    static DAMAGING: PathType;
    static DAMAGING_IN_NEIGHBOR: PathType;
    static DOOR_IRON_CLOSED: PathType;
    static DOOR_OPEN: PathType;
    static DOOR_WOOD_CLOSED: PathType;
    static FENCE: PathType;
    static FIRE: PathType;
    static FIRE_IN_NEIGHBOR: PathType;
    static LAVA: PathType;
    static LEAVES: PathType;
    static ON_TOP_OF_POWDER_SNOW: PathType;
    static ON_TOP_OF_TRAPDOOR: PathType;
    static OPEN: PathType;
    static POWDER_SNOW: PathType;
    static RAIL: PathType;
    static STICKY_HONEY: PathType;
    static TRAPDOOR: PathType;
    static UNPASSABLE_RAIL: PathType;
    static WALKABLE: PathType;
    static WALKABLE_DOOR: PathType;
    static WATER: PathType;
    static WATER_BORDER: PathType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PathType;
    static values(): PathType[];
    private constructor(defaultCost: number)
    readonly malus: number;
    getMalus(): number;
    name(): "BLOCKED" | "OPEN" | "WALKABLE" | "WALKABLE_DOOR" | "TRAPDOOR" | "POWDER_SNOW" | "ON_TOP_OF_POWDER_SNOW" | "FENCE" | "LAVA" | "WATER" | "WATER_BORDER" | "RAIL" | "UNPASSABLE_RAIL" | "FIRE_IN_NEIGHBOR" | "FIRE" | "DAMAGING_IN_NEIGHBOR" | "DAMAGING" | "DOOR_OPEN" | "DOOR_WOOD_CLOSED" | "DOOR_IRON_CLOSED" | "BREACH" | "LEAVES" | "STICKY_HONEY" | "COCOA" | "DAMAGE_CAUTIOUS" | "ON_TOP_OF_TRAPDOOR" | "BIG_MOBS_CLOSE_TO_DANGER";
}