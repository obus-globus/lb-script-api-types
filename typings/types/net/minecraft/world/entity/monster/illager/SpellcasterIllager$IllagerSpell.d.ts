import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SpellcasterIllager$IllagerSpell extends Enum<SpellcasterIllager$IllagerSpell> {
    static BLINDNESS: SpellcasterIllager$IllagerSpell;
    static DISAPPEAR: SpellcasterIllager$IllagerSpell;
    static FANGS: SpellcasterIllager$IllagerSpell;
    static NONE: SpellcasterIllager$IllagerSpell;
    static SUMMON_VEX: SpellcasterIllager$IllagerSpell;
    static WOLOLO: SpellcasterIllager$IllagerSpell;
    static byId(paramid: number): SpellcasterIllager$IllagerSpell;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SpellcasterIllager$IllagerSpell;
    static values(): (Object | null)[];
    private constructor(id: number, red: number, green: number, blue: number)
    // private id: number;
    // private spellColor: number[];
    name(): "NONE" | "SUMMON_VEX" | "FANGS" | "WOLOLO" | "DISAPPEAR" | "BLINDNESS";
}