import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class GuiMessageTag$Icon extends Enum<GuiMessageTag$Icon> {
    static CHAT_MODIFIED: GuiMessageTag$Icon;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GuiMessageTag$Icon;
    static values(): (Object | null)[];
    private constructor(sprite: Identifier, width: number, height: number)
    height: number;
    sprite: Identifier;
    width: number;
    extractRenderState(graphics: GuiGraphicsExtractor, x: number, y: number): void;
    name(): "CHAT_MODIFIED";
}