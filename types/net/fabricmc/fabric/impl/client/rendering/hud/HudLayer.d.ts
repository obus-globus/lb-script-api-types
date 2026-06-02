import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { HudElement } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/hud/HudElement.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface HudLayer extends Object{
    element(arg0: HudElement): HudElement;
    id(): Identifier;
    isRemoved(): boolean;
}