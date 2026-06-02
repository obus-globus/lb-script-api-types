import type { ActiveTextCollector } from '../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { AbstractStringWidget } from '../../../../../net/minecraft/client/gui/components/AbstractStringWidget.d.ts'
import type { StringWidget$TextOverflow } from '../../../../../net/minecraft/client/gui/components/StringWidget$TextOverflow.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class StringWidget extends AbstractStringWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component, font: Font)
    constructor(width: number, height: number, message: Component, font: Font)
    constructor(message: Component, font: Font)
    // private cachedWidth: number;
    // private cachedWidthDirty: boolean;
    // private maxWidth: number;
    // private textOverflow: StringWidget$TextOverflow;
    getWidth(): number;
    setMaxWidth(maxWidth: number): StringWidget;
    setMaxWidth(maxWidth: number, textOverflow: StringWidget$TextOverflow): StringWidget;
    setMessage(message: Component): void;
    visitLines(output: ActiveTextCollector): void;
}