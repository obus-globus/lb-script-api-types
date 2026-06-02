import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { HudElement } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/hud/HudElement.d.ts'
import type { HudElementRegistryImpl$RootLayer } from '../../../../../../../net/fabricmc/fabric/impl/client/rendering/hud/HudElementRegistryImpl$RootLayer.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class HudElementRegistryImpl extends Object {
    static ROOT_ELEMENTS: Map<Identifier, HudElementRegistryImpl$RootLayer>;
    static addFirst(paramarg0: Identifier, paramarg1: HudElement): void;
    static addLast(paramarg0: Identifier, paramarg1: HudElement): void;
    static attachElementAfter(paramarg0: Identifier, paramarg1: Identifier, paramarg2: HudElement): void;
    static attachElementBefore(paramarg0: Identifier, paramarg1: Identifier, paramarg2: HudElement): void;
    static getRoot(paramarg0: Identifier): HudElementRegistryImpl$RootLayer;
    static removeElement(paramarg0: Identifier): void;
    static replaceElement(paramarg0: Identifier, paramarg1: (param0: HudElement) => HudElement): void;
    constructor()
}