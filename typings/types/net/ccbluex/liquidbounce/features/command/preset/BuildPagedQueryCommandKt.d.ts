import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CmdLiteralScope } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdLiteralScope.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class BuildPagedQueryCommandKt extends Object {
    /**
     * Adds a `list {@link page}` subcommand with the same paging UI as {@link pagedQuery}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt#L170 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt:170}
     */
    static pagedList<T extends unknown>(self: CmdLiteralScope, pageSize: number, header: () => Component, items: () => T[], eachRow: (param0: number, param1: T) => Component): void;
    /**
     * Adds the optional page argument and executor to this literal (e.g. `.help {@link page}`).
     * For a listing that lives under `list`, use {@link pagedList}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt#L122 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/preset/BuildPagedQueryCommand.kt:122}
     */
    static pagedQuery<T extends unknown>(self: CmdLiteralScope, pageSize: number, header: () => Component, items: () => T[], eachRow: (param0: number, param1: T) => Component): void;
}