import type { WatchKey } from '../../../../../java/nio/file/WatchKey.d.ts'
import type { WatchService } from '../../../../../java/nio/file/WatchService.d.ts'
import type { IrisObjectSelectionList } from '../../../../../net/irisshaders/iris/gui/element/IrisObjectSelectionList.d.ts'
import type { ShaderPackSelectionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$BaseEntry.d.ts'
import type { ShaderPackSelectionList$PinnedEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$PinnedEntry.d.ts'
import type { ShaderPackSelectionList$ShaderPackEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$ShaderPackEntry.d.ts'
import type { ShaderPackSelectionList$TopButtonRowEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$TopButtonRowEntry.d.ts'
import type { ShaderPackScreen } from '../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ShaderPackSelectionList extends IrisObjectSelectionList<ShaderPackSelectionList$BaseEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: ShaderPackScreen, arg1: Minecraft, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
    readonly applied: ShaderPackSelectionList$ShaderPackEntry;
    // private downloadButton: ShaderPackSelectionList$PinnedEntry;
    // private key: WatchKey;
    // private keyValid: boolean;
    // private screen: ShaderPackScreen;
    readonly topButtonRow: ShaderPackSelectionList$TopButtonRowEntry;
    // private watcher: WatchService;
    addLabelEntries(arg0: Component[]): void;
    addPackEntry(arg0: number, arg1: string): void;
    close(): void;
    extractListBackground(arg0: GuiGraphicsExtractor): void;
    extractListSeparators(arg0: GuiGraphicsExtractor): void;
    extractWidgetRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getApplied(): ShaderPackSelectionList$ShaderPackEntry;
    getRowTop(arg0: number): number;
    getRowWidth(): number;
    getTopButtonRow(): ShaderPackSelectionList$TopButtonRowEntry;
    keyPressed(arg0: KeyEvent): boolean;
    refresh(): void;
    select(arg0: number): void;
    select(arg0: string): void;
    setApplied(arg0: ShaderPackSelectionList$ShaderPackEntry): void;
}