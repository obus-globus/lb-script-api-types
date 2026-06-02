import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class DoRender extends Enum<DoRender> implements Tagged {
    static ARMOR: DoRender;
    static BEACON_BEAMS: DoRender;
    static BLINDING: DoRender;
    static BLOCK_BREAK_OVERLAY: DoRender;
    static BLOCK_BREAK_PARTICLES: DoRender;
    static BOSS_BARS: DoRender;
    static Companion: Tagged$Companion;
    static DARKNESS: DoRender;
    static EAT_PARTICLES: DoRender;
    static ENCHANT_TABLE_BOOK: DoRender;
    static EXPLOSION_PARTICLES: DoRender;
    static FALLING_BLOCKS: DoRender;
    static FLOATING_ITEMS: DoRender;
    static GUI_BACKGROUND: DoRender;
    static INVISIBLE_ENTITIES: DoRender;
    static LIQUIDS_FOG: DoRender;
    static MAP_CONTENTS: DoRender;
    static MAP_MARKERS: DoRender;
    static MOB_IN_SPAWNER: DoRender;
    static NAUSEA: DoRender;
    static PORTAL_OVERLAY: DoRender;
    static POWDER_SNOW_FOG: DoRender;
    static PUMPKIN_BLUR: DoRender;
    static SIGN_TEXT: DoRender;
    static SKYLIGHT_UPDATES: DoRender;
    static SPYGLASS_OVERLAY: DoRender;
    static TITLE: DoRender;
    static WALL_OVERLAY: DoRender;
    static WORLD_BORDER: DoRender;
    static getEntries(): DoRender[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DoRender;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BLINDING" | "DARKNESS" | "NAUSEA" | "ARMOR" | "MOB_IN_SPAWNER" | "ENCHANT_TABLE_BOOK" | "EAT_PARTICLES" | "BLOCK_BREAK_PARTICLES" | "BLOCK_BREAK_OVERLAY" | "TITLE" | "PUMPKIN_BLUR" | "LIQUIDS_FOG" | "POWDER_SNOW_FOG" | "FLOATING_ITEMS" | "MAP_CONTENTS" | "MAP_MARKERS" | "PORTAL_OVERLAY" | "WALL_OVERLAY" | "FALLING_BLOCKS" | "BEACON_BEAMS" | "SKYLIGHT_UPDATES" | "GUI_BACKGROUND" | "SPYGLASS_OVERLAY" | "SIGN_TEXT" | "INVISIBLE_ENTITIES" | "BOSS_BARS" | "EXPLOSION_PARTICLES" | "WORLD_BORDER";
}