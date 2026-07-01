import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { HudElement } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/hud/HudElement.d.ts'
import type { HudLayer } from '../../../../../../../net/fabricmc/fabric/impl/client/rendering/hud/HudLayer.d.ts'
import type { DeltaTracker } from '../../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class HudElementRegistryImpl$RootLayer extends Record {
    constructor(id: Identifier, layers: HudLayer[])
    // private id: Identifier;
    // private layers: HudLayer[];
    equals(arg0: Object | null): boolean;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: DeltaTracker, arg2: HudElement): void;
    hashCode(): number;
    id(): Identifier;
    layers(): HudLayer[];
    toString(): string;
}