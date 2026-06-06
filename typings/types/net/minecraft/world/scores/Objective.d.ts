import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { Objective$Packed } from '../../../../net/minecraft/world/scores/Objective$Packed.d.ts'
import type { Scoreboard } from '../../../../net/minecraft/world/scores/Scoreboard.d.ts'
import type { ObjectiveCriteria } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria.d.ts'
import type { ObjectiveCriteria$RenderType } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria$RenderType.d.ts'
export class Objective extends Object {
    constructor(scoreboard: Scoreboard, name: string, criteria: ObjectiveCriteria, displayName: Component, renderType: ObjectiveCriteria$RenderType, displayAutoUpdate: boolean, numberFormat: NumberFormat)
    readonly criteria: ObjectiveCriteria;
    readonly displayName: Component;
    readonly formattedDisplayName: Component;
    readonly name: string;
    readonly renderType: ObjectiveCriteria$RenderType;
    readonly scoreboard: Scoreboard;
    // private createFormattedDisplayName(): Component;
    displayAutoUpdate(): boolean;
    getCriteria(): ObjectiveCriteria;
    getDisplayName(): Component;
    getFormattedDisplayName(): Component;
    getName(): string;
    getRenderType(): ObjectiveCriteria$RenderType;
    getScoreboard(): Scoreboard;
    numberFormat(): NumberFormat;
    numberFormatOrDefault(_default: NumberFormat): NumberFormat;
    pack(): Objective$Packed;
    setDisplayAutoUpdate(displayAutoUpdate: boolean): void;
    setDisplayName(name: Component): void;
    setNumberFormat(numberFormat: NumberFormat): void;
    setRenderType(renderType: ObjectiveCriteria$RenderType): void;
}