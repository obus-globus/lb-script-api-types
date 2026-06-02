import type { MinecraftSessionService } from '../../../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
import type { ProfileKeyPairManager } from '../../../../../net/minecraft/client/multiplayer/ProfileKeyPairManager.d.ts'
export class SessionBundle extends Object {
    constructor(session: User, sessionService: MinecraftSessionService | null, profileKeys: ProfileKeyPairManager)
    readonly profileKeys: ProfileKeyPairManager;
    readonly session: User;
    readonly sessionService: MinecraftSessionService | null;
    component1(): User;
    component2(): MinecraftSessionService | null;
    component3(): ProfileKeyPairManager;
    copy(session: User, sessionService: MinecraftSessionService | null, profileKeys: ProfileKeyPairManager): SessionBundle;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}