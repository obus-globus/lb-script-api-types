import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { BlitRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/BlitRenderState.d.ts'
import type { GuiElementRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { GuiItemRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiItemRenderState.d.ts'
import type { GuiRenderState$Node } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState$Node.d.ts'
import type { GuiRenderState$TraverseRange } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState$TraverseRange.d.ts'
import type { GuiTextRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiTextRenderState.d.ts'
import type { PanoramaRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/PanoramaRenderState.d.ts'
import type { ScreenArea } from '../../../../../../net/minecraft/client/renderer/state/gui/ScreenArea.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
export class GuiRenderState extends Object implements FabricRenderState {
    constructor()
    clearColorOverride: number;
    // private current: GuiRenderState$Node;
    // private firstStratumAfterBlur: number;
    readonly itemModelIdentities: Object[];
    // private lastElementBounds: ScreenRectangle;
    panoramaRenderState: PanoramaRenderState;
    // private renderStateData: Map<Object | null, Object | null>;
    // private strata: GuiRenderState$Node[];
    addBlitToCurrentLayer(blitState: BlitRenderState): void;
    // private addDebugRectangleIfEnabled(bounds: ScreenRectangle): void;
    addGlyphToCurrentLayer(glyphState: GuiElementRenderState): void;
    addGuiElement(blitState: GuiElementRenderState): void;
    addItem(itemState: GuiItemRenderState): void;
    addPicturesInPictureState(picturesInPictureState: PictureInPictureRenderState): void;
    addText(textState: GuiTextRenderState): void;
    blurBeforeThisStratum(): void;
    clearExtraData(): void;
    clearExtraData(): void;
    // private findAppropriateNode(screenArea: ScreenArea): boolean;
    forEachElement(consumer: (param0: GuiElementRenderState) => void, range: GuiRenderState$TraverseRange): void;
    forEachItem(consumer: (param0: GuiItemRenderState) => void): void;
    forEachPictureInPicture(consumer: (param0: PictureInPictureRenderState) => void): void;
    forEachText(consumer: (param0: GuiTextRenderState) => void): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    getItemModelIdentities(): Object[];
    // private hasIntersection(bounds: ScreenRectangle, states: ScreenArea[]): boolean;
    // private navigateToAboveHighestElementWithIntersectingBounds(bounds: ScreenRectangle): void;
    nextStratum(): void;
    reset(): void;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    sortElements(comparator: (param0: GuiElementRenderState) => kotlin.Boolean): void;
    // private traverse(consumer: (param0: GuiRenderState$Node) => void, range: GuiRenderState$TraverseRange): void;
    // private traverse(node: GuiRenderState$Node, consumer: (param0: GuiRenderState$Node) => void): void;
    up(): void;
}