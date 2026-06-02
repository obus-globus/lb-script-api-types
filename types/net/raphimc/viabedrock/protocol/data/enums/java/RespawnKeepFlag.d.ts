import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class RespawnKeepFlag extends Enum<RespawnKeepFlag> {
    static ATTRIBUTE_MODIFIERS: RespawnKeepFlag;
    static ENTITY_DATA: RespawnKeepFlag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RespawnKeepFlag;
    static values(): (Object | null)[];
    private constructor()
    getBit(): number;
    name(): "ATTRIBUTE_MODIFIERS" | "ENTITY_DATA";
}