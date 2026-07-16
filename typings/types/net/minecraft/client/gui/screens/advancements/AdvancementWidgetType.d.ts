import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { AdvancementType } from '../../../../../../net/minecraft/advancements/AdvancementType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class AdvancementWidgetType extends Enum<AdvancementWidgetType> {
    static OBTAINED: AdvancementWidgetType;
    static UNOBTAINED: AdvancementWidgetType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AdvancementWidgetType;
    static values(): AdvancementWidgetType[];
    private constructor(boxSprite: Identifier, taskFrameSprite: Identifier, challengeFrameSprite: Identifier, goalFrameSprite: Identifier)
    // private boxSprite: Identifier;
    // private challengeFrameSprite: Identifier;
    // private goalFrameSprite: Identifier;
    // private taskFrameSprite: Identifier;
    boxSprite(): Identifier;
    frameSprite(type: AdvancementType): Identifier;
    name(): "OBTAINED" | "UNOBTAINED";
}