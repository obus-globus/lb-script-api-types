import type { GameProfileRepository } from '../../../com/mojang/authlib/GameProfileRepository.d.ts'
import type { MinecraftSessionService } from '../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AuthenticationService extends Object{
    createMinecraftSessionService(): MinecraftSessionService;
    createProfileRepository(): GameProfileRepository;
}