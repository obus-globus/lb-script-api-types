import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Lighting$Entry extends Enum<Lighting$Entry> {
    static ENTITY_IN_UI: Lighting$Entry;
    static ITEMS_3D: Lighting$Entry;
    static ITEMS_FLAT: Lighting$Entry;
    static LEVEL: Lighting$Entry;
    static PLAYER_SKIN: Lighting$Entry;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Lighting$Entry;
    static values(): Lighting$Entry[];
    private constructor()
    name(): "LEVEL" | "ITEMS_FLAT" | "ITEMS_3D" | "ENTITY_IN_UI" | "PLAYER_SKIN";
}