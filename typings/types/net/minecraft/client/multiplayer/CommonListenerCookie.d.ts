import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChatComponent$State } from '../../../../net/minecraft/client/gui/components/ChatComponent$State.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { LevelLoadTracker } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker.d.ts'
import type { PlayerInfo } from '../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { ServerData } from '../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { WorldSessionTelemetryManager } from '../../../../net/minecraft/client/telemetry/WorldSessionTelemetryManager.d.ts'
import type { RegistryAccess$Frozen } from '../../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLinks } from '../../../../net/minecraft/server/ServerLinks.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class CommonListenerCookie extends Record {
    constructor(levelLoadTracker: LevelLoadTracker, localGameProfile: GameProfile, telemetryManager: WorldSessionTelemetryManager, receivedRegistries: RegistryAccess$Frozen, enabledFeatures: FeatureFlagSet, serverBrand: string, serverData: ServerData, postDisconnectScreen: Screen, serverCookies: JavaMap<Identifier, number[]>, chatState: ChatComponent$State, customReportDetails: JavaMap<string, string>, serverLinks: ServerLinks, seenPlayers: JavaMap<UUID, PlayerInfo>, seenInsecureChatWarning: boolean)
    // private chatState: ChatComponent$State;
    // private customReportDetails: JavaMap<string, string>;
    // private enabledFeatures: FeatureFlagSet;
    // private levelLoadTracker: LevelLoadTracker;
    // private localGameProfile: GameProfile;
    // private postDisconnectScreen: Screen;
    // private receivedRegistries: RegistryAccess$Frozen;
    // private seenInsecureChatWarning: boolean;
    // private seenPlayers: JavaMap<UUID, PlayerInfo>;
    // private serverBrand: string;
    // private serverCookies: JavaMap<Identifier, number[]>;
    // private serverData: ServerData;
    // private serverLinks: ServerLinks;
    // private telemetryManager: WorldSessionTelemetryManager;
    chatState(): ChatComponent$State;
    customReportDetails(): JavaMap<string, string>;
    enabledFeatures(): FeatureFlagSet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    levelLoadTracker(): LevelLoadTracker;
    localGameProfile(): GameProfile;
    postDisconnectScreen(): Screen;
    receivedRegistries(): RegistryAccess$Frozen;
    seenInsecureChatWarning(): boolean;
    seenPlayers(): JavaMap<UUID, PlayerInfo>;
    serverBrand(): string;
    serverCookies(): JavaMap<Identifier, number[]>;
    serverData(): ServerData;
    serverLinks(): ServerLinks;
    telemetryManager(): WorldSessionTelemetryManager;
    toString(): string;
}