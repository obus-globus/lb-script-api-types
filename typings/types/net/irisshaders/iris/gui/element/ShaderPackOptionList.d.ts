import type { NavigationController } from '../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { IrisContainerObjectSelectionList } from '../../../../../net/irisshaders/iris/gui/element/IrisContainerObjectSelectionList.d.ts'
import type { ShaderPackOptionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackOptionList$BaseEntry.d.ts'
import type { AbstractElementWidget } from '../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { ShaderPackScreen } from '../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { ShaderPack } from '../../../../../net/irisshaders/iris/shaderpack/ShaderPack.d.ts'
import type { OptionMenuContainer } from '../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ShaderPackOptionList extends IrisContainerObjectSelectionList<ShaderPackOptionList$BaseEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: ShaderPackScreen, arg1: NavigationController, arg2: ShaderPack, arg3: Minecraft, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
    // private container: OptionMenuContainer;
    // private elementWidgets: AbstractElementWidget<any>[];
    readonly navigation: NavigationController;
    // private screen: ShaderPackScreen;
    addHeader(arg0: Component, arg1: boolean): void;
    addWidgets(arg0: number, arg1: AbstractElementWidget<any>[]): void;
    applyShaderPack(arg0: ShaderPack): void;
    extractListBackground(arg0: GuiGraphicsExtractor): void;
    extractListSeparators(arg0: GuiGraphicsExtractor): void;
    getNavigation(): NavigationController;
    getRowWidth(): number;
    rebuild(): void;
    refresh(): void;
}