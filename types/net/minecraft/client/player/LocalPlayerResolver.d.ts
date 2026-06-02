import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ProfileResolver } from '../../../../net/minecraft/server/players/ProfileResolver.d.ts'
export class LocalPlayerResolver extends Object implements ProfileResolver {
    constructor(minecraft: Minecraft, parentResolver: ProfileResolver)
    // private minecraft: Minecraft;
    // private parentResolver: ProfileResolver;
    fetchById(id: UUID): Optional<GameProfile>;
    fetchByName(name: string): Optional<GameProfile>;
    fetchByNameOrId(nameOrId: Either<string, UUID>): Optional<GameProfile>;
}