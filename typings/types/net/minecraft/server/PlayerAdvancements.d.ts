import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementNode } from '../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { AdvancementProgress } from '../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { AdvancementTree } from '../../../net/minecraft/advancements/AdvancementTree.d.ts'
import type { Criterion } from '../../../net/minecraft/advancements/Criterion.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { PlayerAdvancements$Data } from '../../../net/minecraft/server/PlayerAdvancements$Data.d.ts'
import type { ServerAdvancementManager } from '../../../net/minecraft/server/ServerAdvancementManager.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { PlayerList } from '../../../net/minecraft/server/players/PlayerList.d.ts'
export class PlayerAdvancements extends Object {
    constructor(dataFixer: DataFixer, playerList: PlayerList, manager: ServerAdvancementManager, playerSavePath: Path[], player: ServerPlayer)
    // private codec: Codec<PlayerAdvancements$Data>;
    // private isFirstPacket: boolean;
    // private lastSelectedTab: AdvancementHolder;
    readonly player: ServerPlayer;
    // private playerList: PlayerList;
    // private playerSavePath: Path[];
    // private progress: Map<AdvancementHolder, AdvancementProgress>;
    // private progressChanged: AdvancementHolder[];
    // private rootsToUpdate: AdvancementNode[];
    // private tree: AdvancementTree;
    // private visible: AdvancementHolder[];
    // private applyFrom(manager: ServerAdvancementManager, data: PlayerAdvancements$Data): void;
    // private asData(): PlayerAdvancements$Data;
    award(holder: AdvancementHolder, criterion: string): boolean;
    // private checkForAutomaticTriggers(manager: ServerAdvancementManager): void;
    flushDirty(player: ServerPlayer, showAdvancements: boolean): void;
    getOrStartProgress(advancement: AdvancementHolder): AdvancementProgress;
    // private load(manager: ServerAdvancementManager): void;
    // private markForVisibilityUpdate(advancement: AdvancementHolder): void;
    // private registerListener(holder: AdvancementHolder, key: string, criterion: Criterion<T>): void;
    // private registerListeners(holder: AdvancementHolder): void;
    // private registerListeners(manager: ServerAdvancementManager): void;
    reload(manager: ServerAdvancementManager): void;
    // private removeListener(holder: AdvancementHolder, key: string, criterion: Criterion<T>): void;
    revoke(advancement: AdvancementHolder, criterion: string): boolean;
    save(): void;
    setPlayer(player: ServerPlayer): void;
    setSelectedTab(holder: AdvancementHolder): void;
    // private startProgress(holder: AdvancementHolder, progress: AdvancementProgress): void;
    stopListening(): void;
    // private unregisterListeners(holder: AdvancementHolder): void;
    // private updateTreeVisibility(root: AdvancementNode, added: AdvancementHolder[], removed: Identifier[]): void;
}