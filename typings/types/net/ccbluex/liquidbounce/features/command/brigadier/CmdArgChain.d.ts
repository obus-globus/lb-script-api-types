import type { Command } from '../../../../../../com/mojang/brigadier/Command.d.ts'
import type { ArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { LiteralArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChainElement } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ChainElement.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdArgElement } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdArgElement.d.ts'
import type { CmdNode } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdNode.d.ts'
/**
 * An argument chain attached to a command literal: a linear sequence of arguments ending
 * in exactly one executor declared through {@link CmdChainScope.exec}/{@link CmdChainScope.execSuspend}.
 *
 * Compiles to nested Brigadier argument builders; every node whose remaining tail is
 * optional receives the shared executor, so omitted trailing values resolve to defaults.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:58}
 */
export class CmdArgChain extends Object implements CmdNode {
    constructor(elements: ChainElement[])
    // private elements: ChainElement[];
    // private arg(index: number): CmdArgElement;
    // private argOrNull(index: number): CmdArgElement | null;
    attachTo(parent: LiteralArgumentBuilder<ClientCommandSource>): void;
    // private buildFrom(from: number): ArgumentBuilder<ClientCommandSource, any>;
    /**
     * True when the literal itself may execute this chain's leaf, which is only possible
     * when every argument in the chain is optional.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:75}
     */
    canExecuteAtParent(): boolean;
    /**
     * The executor declared as the chain's validated leaf.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:79}
     */
    leafExecutor(): (param0: CommandContext<ClientCommandSource>) => number;
    toBuilder(): ArgumentBuilder<ClientCommandSource, any>;
}