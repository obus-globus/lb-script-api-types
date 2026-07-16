import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WorldTemplate$WorldTemplateType extends Enum<WorldTemplate$WorldTemplateType> {
    static ADVENTUREMAP: WorldTemplate$WorldTemplateType;
    static EXPERIENCE: WorldTemplate$WorldTemplateType;
    static INSPIRATION: WorldTemplate$WorldTemplateType;
    static MINIGAME: WorldTemplate$WorldTemplateType;
    static WORLD_TEMPLATE: WorldTemplate$WorldTemplateType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WorldTemplate$WorldTemplateType;
    static values(): WorldTemplate$WorldTemplateType[];
    private constructor()
    name(): "WORLD_TEMPLATE" | "MINIGAME" | "ADVENTUREMAP" | "EXPERIENCE" | "INSPIRATION";
}