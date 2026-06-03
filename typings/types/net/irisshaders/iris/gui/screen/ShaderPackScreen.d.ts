import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NavigationController } from '../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { OldImageButton } from '../../../../../net/irisshaders/iris/gui/OldImageButton.d.ts'
import type { ShaderPackOptionList } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackOptionList.d.ts'
import type { ShaderPackSelectionList } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList.d.ts'
import type { AbstractElementWidget } from '../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { HudHideable } from '../../../../../net/irisshaders/iris/gui/screen/HudHideable.d.ts'
import type { FrameUpdateNotifier } from '../../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { SmoothedFloat } from '../../../../../net/irisshaders/iris/uniforms/transforms/SmoothedFloat.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ShaderPackScreen extends Screen implements HudHideable {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static TOP_LAYER_RENDER_QUEUE: () => void[];
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(arg0: Screen)
    // private backgroundInit: number;
    blurTransition: SmoothedFloat;
    buttonTransition: SmoothedFloat;
    // private developmentComponent: MutableComponent;
    // private dropChanges: boolean;
    // private guiButtonHoverTimer: number;
    // private guiHidden: boolean;
    // private hoveredElement: AbstractElementWidget<Object>;
    // private hoveredElementCommentBody: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private hoveredElementCommentTimer: number;
    // private hoveredElementCommentTitle: Optional<Component>;
    // private irisTextComponent: MutableComponent;
    listTransition: SmoothedFloat;
    // private navigation: NavigationController;
    // private notificationDialog: Component;
    // private notificationDialogTimer: number;
    // private notifier: FrameUpdateNotifier;
    // private openFolderButton: Button;
    // private optionMenuOpen: boolean;
    // private parent: Screen;
    // private screenSwitchButton: Button;
    // private shaderOptionList: ShaderPackOptionList;
    // private shaderPackList: ShaderPackSelectionList;
    // private showHideButton: OldImageButton;
    // private updateComponent: MutableComponent;
    applyChanges(): void;
    // private discardChanges(): void;
    displayNotification(arg0: Component): void;
    // private dropChangesAndClose(): void;
    extractBlurredBackground(arg0: GuiGraphicsExtractor): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getBottomRowOption(): Button;
    importPackOptions(arg0: Path[]): void;
    init(): void;
    init(width: number, height: number): void;
    isDisplayingComment(): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    onClose(): void;
    onFilesDrop(arg0: Path[][]): void;
    onOptionMenuFilesDrop(arg0: Path[][]): void;
    onPackListFilesDrop(arg0: Path[][]): void;
    // private openShaderPackFolder(): void;
    refreshForChangedPack(): void;
    refreshScreenSwitchButton(): void;
    setElementHoveredStatus(arg0: AbstractElementWidget<Object>, arg1: boolean): void;
    tick(): void;
}