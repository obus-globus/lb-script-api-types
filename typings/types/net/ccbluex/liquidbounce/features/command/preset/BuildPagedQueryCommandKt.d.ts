import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class BuildPagedQueryCommandKt extends Object {
    /**
     * Builds a general paged query command with one optional integer parameter.
     *
     * @param pageSize the size of a single page. should be greater than 0.
     * @param header the generator function for page header before all items.
     * @param items provides all items. This function should be light-weighted.
     * @param eachRow @author MukjepScarlet
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt:129}
     */
    static pagedQuery(commandBuilder: CommandBuilder, pageSize: number, header: (param0: Object) => Component, items: () => (Object | null)[], eachRow: (param0: Object, param1: Object, param2: Object) => Component): Command;
}