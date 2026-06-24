import type { Suggestion } from '../../../../../com/mojang/brigadier/suggestion/Suggestion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { CommandSuggestions } from '../../../../../net/minecraft/client/gui/components/CommandSuggestions.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Rect2i } from '../../../../../net/minecraft/client/renderer/Rect2i.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class CommandSuggestions$SuggestionsList extends Object {
    private constructor(null_: CommandSuggestions, x: number, y: number, width: number, suggestionList: Suggestion[], immediateNarration: boolean)
    // private current: number;
    // private lastMouse: Vec2;
    // private lastNarratedEntry: number;
    // private offset: number;
    // private originalContents: string;
    // private rect: Rect2i;
    // private suggestionList: Suggestion[];
    // private tabCycles: boolean;
    cycle(direction: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    // private getNarrationMessage(): Component;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(x: number, y: number): boolean;
    mouseScrolled(scroll: number): boolean;
    select(index: number): void;
    useSuggestion(): void;
}