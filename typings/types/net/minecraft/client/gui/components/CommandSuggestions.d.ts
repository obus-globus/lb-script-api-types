import type { ParseResults } from '../../../../../com/mojang/brigadier/ParseResults.d.ts'
import type { SuggestionContext } from '../../../../../com/mojang/brigadier/context/SuggestionContext.d.ts'
import type { Suggestion } from '../../../../../com/mojang/brigadier/suggestion/Suggestion.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { CommandSuggestions$SuggestionsList } from '../../../../../net/minecraft/client/gui/components/CommandSuggestions$SuggestionsList.d.ts'
import type { EditBox } from '../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { ClientSuggestionProvider } from '../../../../../net/minecraft/client/multiplayer/ClientSuggestionProvider.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class CommandSuggestions extends Object {
    static LINE_HEIGHT: number;
    static USAGE_FORMAT: Style;
    static USAGE_OFFSET_FROM_BOTTOM: number;
    constructor(minecraft: Minecraft, screen: Screen, input: EditBox, font: Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number)
    readonly allowHiding: boolean;
    readonly allowSuggestions: boolean;
    // private anchorToBottom: boolean;
    // private commandUsage: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    // private commandUsagePosition: number;
    // private commandUsageWidth: number;
    // private commandsAllowed: boolean;
    // private commandsOnly: boolean;
    // private currentParse: ParseResults<ClientSuggestionProvider>;
    // private currentParseIsCommand: boolean;
    // private currentParseIsMessage: boolean;
    // private fillColor: number;
    // private font: Font;
    // private input: EditBox;
    // private keepSuggestions: boolean;
    // private lineStartOffset: number;
    // private messagesAllowed: boolean;
    // private minecraft: Minecraft;
    // private onlyShowIfCursorPastError: boolean;
    // private pendingSuggestions: CompletableFuture<Suggestions>;
    // private screen: Screen;
    // private suggestionLineLimit: number;
    // private suggestions: CommandSuggestions$SuggestionsList;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    extractSuggestions(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): boolean;
    extractUsage(graphics: GuiGraphicsExtractor): void;
    // private fillNodeUsage(suggestionContext: SuggestionContext<ClientSuggestionProvider>, usageFormat: Style): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    // private formatChat(text: string, offset: number): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    getNarrationMessage(): Component;
    getUsageNarration(): Component;
    hasAllowedInput(): boolean;
    hide(): void;
    isVisible(): boolean;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent): boolean;
    mouseScrolled(scroll: number): boolean;
    // private recomputeUsageBoxWidth(): void;
    setAllowHiding(allowHiding: boolean): void;
    setAllowSuggestions(allowSuggestions: boolean): void;
    setRestrictions(messagesAllowed: boolean, commandsAllowed: boolean): void;
    showSuggestions(immediateNarration: boolean): void;
    // private sortSuggestions(suggestions: Suggestions): Suggestion[];
    updateCommandInfo(): void;
    // private updateUsageInfo(currentParse: ParseResults<ClientSuggestionProvider>, suggestions: Suggestions): void;
    // private viaFabricPlus$cancelTabComplete(): boolean;
}