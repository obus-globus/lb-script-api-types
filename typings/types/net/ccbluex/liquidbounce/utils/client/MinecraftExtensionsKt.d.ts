import type { GameProfileRepository } from '../../../../../com/mojang/authlib/GameProfileRepository.d.ts'
import type { MinecraftSessionService } from '../../../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { ServicesKeySet } from '../../../../../com/mojang/authlib/yggdrasil/ServicesKeySet.d.ts'
import type { Window } from '../../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Services } from '../../../../../net/minecraft/server/Services.d.ts'
import type { ProfileResolver } from '../../../../../net/minecraft/server/players/ProfileResolver.d.ts'
import type { UserNameToIdResolver } from '../../../../../net/minecraft/server/players/UserNameToIdResolver.d.ts'
export class MinecraftExtensionsKt extends Object {
    static getDimensions(paramarg0: Window): number;
    static getGpuDevice(): GpuDevice;
    static getInteraction(): MultiPlayerGameMode;
    static getMc(): Minecraft;
    static getNetwork(): ClientPacketListener;
    static getPlayer(): LocalPlayer;
    static getScaledDimension(paramarg0: Window): number;
    static getWorld(): ClientLevel;
    static isSingleplayer(paramarg0: Minecraft): boolean;
    static with(self: Services, sessionService: MinecraftSessionService, servicesKeySet: ServicesKeySet, profileRepository: GameProfileRepository, nameToIdCache: UserNameToIdResolver, profileResolver: ProfileResolver): Services;
}