import type { FriendsService } from '../../../../../../com/mojang/authlib/yggdrasil/FriendsService.d.ts'
import type { PresenceResponse } from '../../../../../../com/mojang/authlib/yggdrasil/response/PresenceResponse.d.ts'
import type { PresenceStatus } from '../../../../../../com/mojang/authlib/yggdrasil/response/PresenceStatus.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
export class PresenceHandler extends Object {
    constructor(minecraft: Minecraft, friendsService: FriendsService)
    // private friendsService: FriendsService;
    // private lastPresencePost: Instant;
    readonly latestPresence: PresenceResponse;
    // private minecraft: Minecraft;
    // private updatePresence: boolean;
    getLatestPresence(): PresenceResponse;
    // private getPresenceStatus(): PresenceStatus;
    // private getPublicPresenceStatus(): PresenceStatus;
    // private shouldRefreshPresence(): boolean;
    tick(): void;
    tryUpdatePresence(): void;
    // private updatePresence(): void;
}