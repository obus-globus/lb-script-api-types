import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WorldTemplate$WorldTemplateType extends Enum<WorldTemplate$WorldTemplateType> {
    static ADVENTUREMAP: WorldTemplate$WorldTemplateType;
    static EXPERIENCE: WorldTemplate$WorldTemplateType;
    static INSPIRATION: WorldTemplate$WorldTemplateType;
    static MINIGAME: WorldTemplate$WorldTemplateType;
    static WORLD_TEMPLATE: WorldTemplate$WorldTemplateType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): WorldTemplate$WorldTemplateType;
    static values(): WorldTemplate$WorldTemplateType[];
    private constructor()
    name(): "WORLD_TEMPLATE" | "MINIGAME" | "ADVENTUREMAP" | "EXPERIENCE" | "INSPIRATION";
}