import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class OptionFlag extends Enum<OptionFlag> {
    static REQUIRES_ASSET_RELOAD: OptionFlag;
    static REQUIRES_GAME_RESTART: OptionFlag;
    static REQUIRES_RENDERER_RELOAD: OptionFlag;
    static REQUIRES_RENDERER_UPDATE: OptionFlag;
    static REQUIRES_VIDEOMODE_RELOAD: OptionFlag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OptionFlag;
    static values(): OptionFlag[];
    private constructor()
    readonly id: Identifier;
    getId(): Identifier;
    name(): "REQUIRES_RENDERER_RELOAD" | "REQUIRES_RENDERER_UPDATE" | "REQUIRES_ASSET_RELOAD" | "REQUIRES_VIDEOMODE_RELOAD" | "REQUIRES_GAME_RESTART";
}