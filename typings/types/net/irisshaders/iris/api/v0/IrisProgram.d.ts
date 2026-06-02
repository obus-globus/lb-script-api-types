import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IrisProgram extends Enum<IrisProgram> {
    static ARMOR_GLINT: IrisProgram;
    static BASIC: IrisProgram;
    static BEACON_BEAM: IrisProgram;
    static BLOCK: IrisProgram;
    static BLOCK_TRANSLUCENT: IrisProgram;
    static CLOUDS: IrisProgram;
    static EMISSIVE_ENTITIES: IrisProgram;
    static ENTITIES: IrisProgram;
    static ENTITIES_TRANSLUCENT: IrisProgram;
    static HAND: IrisProgram;
    static HAND_TRANSLUCENT: IrisProgram;
    static LINES: IrisProgram;
    static PARTICLES: IrisProgram;
    static PARTICLES_TRANSLUCENT: IrisProgram;
    static SKY_BASIC: IrisProgram;
    static SKY_TEXTURED: IrisProgram;
    static TERRAIN: IrisProgram;
    static TERRAIN_CUTOUT: IrisProgram;
    static TERRAIN_SOLID: IrisProgram;
    static TEXTURED: IrisProgram;
    static TRANSLUCENT: IrisProgram;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IrisProgram;
    static values(): (Object | null)[];
    private constructor()
    name(): "BASIC" | "TEXTURED" | "TERRAIN" | "TERRAIN_SOLID" | "TERRAIN_CUTOUT" | "TRANSLUCENT" | "SKY_BASIC" | "SKY_TEXTURED" | "ARMOR_GLINT" | "ENTITIES" | "ENTITIES_TRANSLUCENT" | "CLOUDS" | "BLOCK" | "BLOCK_TRANSLUCENT" | "HAND" | "HAND_TRANSLUCENT" | "PARTICLES" | "PARTICLES_TRANSLUCENT" | "EMISSIVE_ENTITIES" | "BEACON_BEAM" | "LINES";
}