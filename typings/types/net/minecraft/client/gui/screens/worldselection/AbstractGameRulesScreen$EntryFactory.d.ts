import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractGameRulesScreen$RuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$RuleEntry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export interface AbstractGameRulesScreen$EntryFactory<T extends Object | number | string | boolean> extends Object {
    create(name: Component, tooltip: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], narration: string, gameRule: GameRule<T>): AbstractGameRulesScreen$RuleEntry;
}