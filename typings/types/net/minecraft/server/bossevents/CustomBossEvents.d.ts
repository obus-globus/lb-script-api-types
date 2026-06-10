import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { CustomBossEvent } from '../../../../net/minecraft/server/bossevents/CustomBossEvent.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { SavedData } from '../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class CustomBossEvents extends SavedData {
    static TYPE: SavedDataType<CustomBossEvents>;
    constructor()
    readonly events: Map<Identifier, CustomBossEvent>;
    create(random: RandomSource, id: Identifier, name: Component): CustomBossEvent;
    get(id: Identifier): CustomBossEvent;
    getEvents(): CustomBossEvent[];
    getIds(): Identifier[];
    onPlayerConnect(player: ServerPlayer): void;
    onPlayerDisconnect(player: ServerPlayer): void;
    remove(event: CustomBossEvent): void;
}