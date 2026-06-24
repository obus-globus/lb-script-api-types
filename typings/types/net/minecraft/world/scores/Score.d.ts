import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { ReadOnlyScoreInfo } from '../../../../net/minecraft/world/scores/ReadOnlyScoreInfo.d.ts'
import type { Score$Packed } from '../../../../net/minecraft/world/scores/Score$Packed.d.ts'
export class Score extends Object implements ReadOnlyScoreInfo {
    constructor()
    constructor(packed: Score$Packed)
    // private display: Component;
    readonly locked: boolean;
    // private numberFormat: NumberFormat;
    // private value: number;
    display(): Component;
    display(display: Component): void;
    formatValue(defaultFormat: NumberFormat): MutableComponent;
    isLocked(): boolean;
    numberFormat(): NumberFormat;
    numberFormat(numberFormat: NumberFormat): void;
    pack(): Score$Packed;
    setLocked(locked: boolean): void;
    value(): number;
    value(score: number): void;
}