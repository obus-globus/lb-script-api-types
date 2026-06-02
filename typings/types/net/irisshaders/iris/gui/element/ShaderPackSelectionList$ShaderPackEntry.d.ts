import type { ShaderPackSelectionList } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList.d.ts'
import type { ShaderPackSelectionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$BaseEntry.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class ShaderPackSelectionList$ShaderPackEntry extends ShaderPackSelectionList$BaseEntry {
    static CONTENT_PADDING: number;
    constructor(null_: ShaderPackSelectionList$ShaderPackEntry, arg1: number, arg2: ShaderPackSelectionList, arg3: string)
    // private bounds: ScreenRectangle;
    readonly focused: boolean;
    // private index: number;
    // private list: ShaderPackSelectionList;
    readonly packName: string;
    // private doThing(): boolean;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    getPackName(): string;
    getRectangle(): ScreenRectangle;
    isApplied(): boolean;
    isFocused(): boolean;
    isSelected(): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
}