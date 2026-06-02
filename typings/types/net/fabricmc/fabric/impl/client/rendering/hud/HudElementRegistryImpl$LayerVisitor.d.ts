import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../../../java/util/ListIterator.d.ts'
import type { HudLayer } from '../../../../../../../net/fabricmc/fabric/impl/client/rendering/hud/HudLayer.d.ts'
export interface HudElementRegistryImpl$LayerVisitor extends Object{
    visit(arg0: HudLayer, arg1: ListIterator<HudLayer>): boolean;
}