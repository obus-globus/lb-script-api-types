import type { LiteralArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdLiteralScope } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdLiteralScope.d.ts'
import type { CmdNode } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdNode.d.ts'
/**
 * A nested literal compiled as one Brigadier literal builder, plus redirecting aliases.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L141 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:141}
 */
export class CmdLiteralNode extends Object implements CmdNode {
    constructor(name: string, path: string, aliases: string[], block: (param0: CmdLiteralScope) => void)
    // private aliases: string[];
    // private block: (param0: CmdLiteralScope) => void;
    // private name: string;
    // private path: string;
    attachTo(parent: LiteralArgumentBuilder<ClientCommandSource>): void;
    toBuilder(): LiteralArgumentBuilder<ClientCommandSource>;
}