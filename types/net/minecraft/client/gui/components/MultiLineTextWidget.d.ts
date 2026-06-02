import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { ActiveTextCollector } from '../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { AbstractStringWidget } from '../../../../../net/minecraft/client/gui/components/AbstractStringWidget.d.ts'
import type { MultiLineLabel } from '../../../../../net/minecraft/client/gui/components/MultiLineLabel.d.ts'
import type { MultiLineTextWidget$CacheKey } from '../../../../../net/minecraft/client/gui/components/MultiLineTextWidget$CacheKey.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { SingleKeyCache } from '../../../../../net/minecraft/util/SingleKeyCache.d.ts'
export class MultiLineTextWidget extends AbstractStringWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, message: Component, font: Font)
    constructor(message: Component, font: Font)
    // private cache: SingleKeyCache<MultiLineTextWidget$CacheKey, MultiLineLabel>;
    // private centered: boolean;
    // private maxRows: OptionalInt;
    // private maxWidth: OptionalInt;
    // private getFreshCacheKey(): MultiLineTextWidget$CacheKey;
    getHeight(): number;
    getTextX(): number;
    getTextY(): number;
    getWidth(): number;
    setCentered(centered: boolean): MultiLineTextWidget;
    setMaxRows(maxRows: number): MultiLineTextWidget;
    setMaxWidth(maxWidth: number): MultiLineTextWidget;
    visitLines(output: ActiveTextCollector): void;
}