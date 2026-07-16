import type { ViaFabricPlusBase } from '../../../com/viaversion/viafabricplus/api/ViaFabricPlusBase.d.ts'
import type { ChangeProtocolVersionCallback } from '../../../com/viaversion/viafabricplus/api/events/ChangeProtocolVersionCallback.d.ts'
import type { LoadingCycleCallback } from '../../../com/viaversion/viafabricplus/api/events/LoadingCycleCallback.d.ts'
import type { SettingGroup } from '../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { UserConnection } from '../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ProtocolVersion } from '../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Event } from '../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { ServerData } from '../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Connection } from '../../../net/minecraft/network/Connection.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MobEffect } from '../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Item as Item_2 } from '../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { BannerPattern } from '../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
import type { Logger } from '../../../org/apache/logging/log4j/Logger.d.ts'
export class ViaFabricPlusImpl extends Object implements ViaFabricPlusBase {
    static CHANGE_PROTOCOL_VERSION: Event<ChangeProtocolVersionCallback>;
    static INSTANCE: ViaFabricPlusImpl;
    static LOADING_CYCLE: Event<LoadingCycleCallback>;
    constructor()
    readonly implVersion: string;
    // private loadingFuture: CompletableFuture<void>;
    readonly logger: Logger;
    readonly path: Path;
    readonly version: string;
    addSettingGroup(arg0: SettingGroup): void;
    apiVersion(): number;
    bannerPatternExists(arg0: ResourceKey<BannerPattern>, arg1: ProtocolVersion): boolean;
    effectExists(arg0: Holder<MobEffect>, arg1: ProtocolVersion): boolean;
    enchantmentExists(arg0: ResourceKey<Enchantment>, arg1: ProtocolVersion): boolean;
    getImplVersion(): string;
    getLogger(): Logger;
    getMaxChatLength(arg0: ProtocolVersion): number;
    getPath(): Path;
    getPlayNetworkUserConnection(): UserConnection;
    getServerVersion(arg0: ServerData): ProtocolVersion;
    getSettingGroup(arg0: string): SettingGroup;
    getSettingGroups(): SettingGroup[];
    getStackCount(arg0: ItemStack): number;
    getTargetVersion(): ProtocolVersion;
    getTargetVersion(arg0: Channel): ProtocolVersion;
    getTargetVersion(arg0: Connection): ProtocolVersion;
    getUserConnection(arg0: Connection): UserConnection;
    getVersion(): string;
    init(): void;
    itemExists(arg0: Item_2, arg1: ProtocolVersion): boolean;
    itemExistsInConnection(arg0: Item_2): boolean;
    itemExistsInConnection(arg0: ItemStack): boolean;
    openProtocolSelectionScreen(arg0: Screen): void;
    openSettingsScreen(arg0: Screen): void;
    registerLoadingCycleCallback(arg0: LoadingCycleCallback): void;
    registerOnChangeProtocolVersionCallback(arg0: ChangeProtocolVersionCallback): void;
    setTargetVersion(arg0: ProtocolVersion): void;
    setTargetVersion(arg0: ProtocolVersion, arg1: boolean): void;
    translateItem(arg0: Item, arg1: ProtocolVersion): ItemStack;
    translateItem(arg0: ItemStack, arg1: ProtocolVersion): Item;
}