import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command$Handler } from '../../../../../net/ccbluex/liquidbounce/features/command/Command$Handler.d.ts'
import type { CommandManager$TokenizationResult } from '../../../../../net/ccbluex/liquidbounce/features/command/CommandManager$TokenizationResult.d.ts'
import type { Parameter } from '../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { DebuggedOwner } from '../../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { HoverEvent } from '../../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class Command extends Object implements DebuggedOwner, MinecraftShortcuts {
    constructor(name: string, aliases: string[], parameters: Parameter<Object>[], subcommands: Command[], executable: boolean, handler: Command$Handler | null, requiresIngame: boolean)
    readonly aliases: string[];
    readonly debugDisplayName: Component;
    readonly description: MutableComponent;
    readonly executable: boolean;
    readonly handler: Command$Handler | null;
    index: number;
    readonly name: string;
    readonly parameters: Parameter<Object>[];
    readonly parentCommand: Command | null;
    readonly requiresIngame: boolean;
    // private subcommandMap: { [key: string]: Command };
    /*not mapped: */ getSubcommandMap$net_ccbluex_liquidbounce(): { [key: string]: Command };
    readonly subcommands: Command[];
    readonly translationBaseKey: string;
    autoComplete(builder: SuggestionsBuilder, tokenizationResult: CommandManager$TokenizationResult, commandIdx: number, isNewParameter: boolean): void;
    // private getParentKeys(currentCommand: Command | null, current: string): string;
    nameAsText(): Component;
    /**
     * Sends a styled command result with copyable content and custom text component
     *
     * @param key Translation key (will be prefixed with command's translation base)
     * @param textComponent Text component to display
     * @param copyContent Optional content to copy when clicked (defaults to text component's string representation)
     * @param formatting Function to apply formatting to the text (default: regular)
     * @param hover Optional hover event (defaults to "Click to copy" tooltip)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L144 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:144}
     */
    printStyledComponent(key: string, textComponent: Component | null, copyContent: string | null, formatting: (param0: MutableComponent) => MutableComponent, hover: HoverEvent | null): void;
    /**
     * Sends a styled command result with copyable content
     *
     * @param key Translation key (will be prefixed with command's translation base)
     * @param data Optional data to be displayed and copied
     * @param formatting Function to apply formatting to the text (default: regular)
     * @param hover Optional hover event (defaults to "Click to copy" tooltip)
     * @param click Optional click action type (defaults to {@link ClickEvent.CopyToClipboard})
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L122 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:122}
     */
    printStyledText(key: string, data: string | null, formatting: (param0: MutableComponent) => MutableComponent, hover: HoverEvent | null, click: ClickEvent | null): void;
    result(key: string, args: Object[]): MutableComponent;
    resultWithTree(key: string, args: Object[]): MutableComponent;
    /**
     * Returns the formatted usage information of this command
     *
     * e.g.
     * ```
     * command_name subcommand_name <required_arg> [[<optional_vararg>]...
     * ```
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L179 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:179}
     */
    usage(): Component[];
}