import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function3 } from '../../../../../../kotlin/jvm/functions/Function3.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
export class BuildPagedQueryCommandKt extends Object {
    /**
     * Builds a general paged query command with one optional integer parameter.
     *
     * @param pageSize the size of a single page. should be greater than 0.
     * @param header the generator function for page header before all items.
     * @param items provides all items. This function should be light-weighted.
     * @param eachRow controls how to render the item in chat HUD.
     * @author MukjepScarlet
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt:119}
     */
    static pagedQuery(commandBuilder: CommandBuilder, pageSize: number, header: Function1<Object, Object>, items: Function0<Object>, eachRow: Function3<Object, Object, Object, Object>): Command;
}