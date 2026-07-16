import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class RespawnKeepFlag extends Enum<RespawnKeepFlag> {
    static ATTRIBUTE_MODIFIERS: RespawnKeepFlag;
    static ENTITY_DATA: RespawnKeepFlag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RespawnKeepFlag;
    static values(): RespawnKeepFlag[];
    private constructor()
    getBit(): number;
    name(): "ATTRIBUTE_MODIFIERS" | "ENTITY_DATA";
}