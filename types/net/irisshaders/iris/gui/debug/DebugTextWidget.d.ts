import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { ShaderCompileException } from '../../../../../net/irisshaders/iris/gl/shader/ShaderCompileException.d.ts'
import type { DebugTextWidget$Content } from '../../../../../net/irisshaders/iris/gui/debug/DebugTextWidget$Content.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractTextAreaWidget } from '../../../../../net/minecraft/client/gui/components/AbstractTextAreaWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class DebugTextWidget extends AbstractTextAreaWidget {
    static DEFAULT_TOTAL_PADDING: number;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Font, arg5: Exception)
    // private content: DebugTextWidget$Content;
    // private font: Font;
    // private buildContent(arg0: Exception): DebugTextWidget$Content;
    // private buildContentShader(arg0: ShaderCompileException): DebugTextWidget$Content;
    // private containerWidth(): number;
    extractContents(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getInnerHeight(): number;
    scrollRate(): number;
    updateWidgetNarration(arg0: NarrationElementOutput): void;
}