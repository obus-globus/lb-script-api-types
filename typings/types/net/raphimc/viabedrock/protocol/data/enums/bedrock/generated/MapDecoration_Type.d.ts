import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MapDecoration_Type extends Enum<MapDecoration_Type> {
    static ItemFrame: MapDecoration_Type;
    static JungleTemple: MapDecoration_Type;
    static Mansion: MapDecoration_Type;
    static MarkerBlue: MapDecoration_Type;
    static MarkerGreen: MapDecoration_Type;
    static MarkerOrange: MapDecoration_Type;
    static MarkerPink: MapDecoration_Type;
    static MarkerRed: MapDecoration_Type;
    static MarkerSign: MapDecoration_Type;
    static MarkerTeal: MapDecoration_Type;
    static MarkerWhite: MapDecoration_Type;
    static MarkerYellow: MapDecoration_Type;
    static Monument: MapDecoration_Type;
    static NoDraw: MapDecoration_Type;
    static Player: MapDecoration_Type;
    static PlayerHidden: MapDecoration_Type;
    static PlayerOffLimits: MapDecoration_Type;
    static PlayerOffMap: MapDecoration_Type;
    static SmallSquareWhite: MapDecoration_Type;
    static SquareWhite: MapDecoration_Type;
    static TrialChambers: MapDecoration_Type;
    static TriangleGreen: MapDecoration_Type;
    static TriangleRed: MapDecoration_Type;
    static VillageDesert: MapDecoration_Type;
    static VillagePlains: MapDecoration_Type;
    static VillageSavanna: MapDecoration_Type;
    static VillageSnowy: MapDecoration_Type;
    static VillageTaiga: MapDecoration_Type;
    static WitchHut: MapDecoration_Type;
    static XWhite: MapDecoration_Type;
    static getByName(paramarg0: string): MapDecoration_Type;
    static getByName(paramarg0: string, paramarg1: MapDecoration_Type): MapDecoration_Type;
    static getByValue(paramarg0: number): MapDecoration_Type;
    static getByValue(paramarg0: number, paramarg1: MapDecoration_Type): MapDecoration_Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MapDecoration_Type;
    static values(): MapDecoration_Type[];
    private constructor(arg2: number)
    private constructor(arg2: MapDecoration_Type)
    readonly value: number;
    getValue(): number;
    name(): "MarkerWhite" | "MarkerGreen" | "MarkerRed" | "MarkerBlue" | "XWhite" | "TriangleRed" | "SquareWhite" | "MarkerSign" | "MarkerPink" | "MarkerOrange" | "MarkerYellow" | "MarkerTeal" | "TriangleGreen" | "SmallSquareWhite" | "Mansion" | "Monument" | "NoDraw" | "VillageDesert" | "VillagePlains" | "VillageSavanna" | "VillageSnowy" | "VillageTaiga" | "JungleTemple" | "WitchHut" | "TrialChambers" | "Player" | "PlayerOffMap" | "PlayerOffLimits" | "PlayerHidden" | "ItemFrame";
}