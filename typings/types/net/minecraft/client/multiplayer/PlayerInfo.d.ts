import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { IPlayerInfo } from '../../../../com/viaversion/viafabricplus/visuals/injection/access/r1_7_tab_list_tyle/IPlayerInfo.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { RemoteChatSession } from '../../../../net/minecraft/network/chat/RemoteChatSession.d.ts'
import type { SignedMessageValidator } from '../../../../net/minecraft/network/chat/SignedMessageValidator.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { PlayerSkin } from '../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { PlayerTeam } from '../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
export class PlayerInfo extends Object implements IPlayerInfo {
    static createSkinLookup(paramprofile: GameProfile): () => PlayerSkin;
    constructor(profile: GameProfile, enforcesSecureChat: boolean)
    // private capeTexture: Identifier;
    // private capeTextureLoading: boolean;
    readonly chatSession: RemoteChatSession;
    readonly gameMode: GameType;
    readonly latency: number;
    readonly messageValidator: (param0: PlayerChatMessage) => PlayerChatMessage;
    readonly profile: GameProfile;
    // private skinLookup: () => PlayerSkin;
    readonly tabListDisplayName: Component;
    readonly tabListOrder: number;
    // private viaFabricPlusVisuals$index: number;
    clearChatSession(enforcesSecureChat: boolean): void;
    getChatSession(): RemoteChatSession;
    getGameMode(): GameType;
    getLatency(): number;
    getMessageValidator(): (param0: PlayerChatMessage) => PlayerChatMessage;
    getProfile(): GameProfile;
    getSkin(): PlayerSkin;
    getTabListDisplayName(): Component;
    getTabListOrder(): number;
    getTeam(): PlayerTeam;
    hasVerifiableChat(): boolean;
    // private liquid_bounce$fetchCapeTexture(): void;
    setChatSession(chatSession: RemoteChatSession): void;
    setGameMode(gameMode: GameType): void;
    setLatency(latency: number): void;
    setShowHat(showHat: boolean): void;
    setTabListDisplayName(tabListDisplayName: Component): void;
    setTabListOrder(tabListOrder: number): void;
    showHat(): boolean;
    viaFabricPlusVisuals$getIndex(): number;
}