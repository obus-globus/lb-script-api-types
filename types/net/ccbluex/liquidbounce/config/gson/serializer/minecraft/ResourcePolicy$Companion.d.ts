import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourcePolicy } from '../../../../../../../net/ccbluex/liquidbounce/config/gson/serializer/minecraft/ResourcePolicy.d.ts'
import type { ServerData$ServerPackStatus } from '../../../../../../../net/minecraft/client/multiplayer/ServerData$ServerPackStatus.d.ts'
export class ResourcePolicy$Companion extends Object {
    fromMinecraftPolicy(policy: ServerData$ServerPackStatus): ResourcePolicy;
    fromString(policy: string): ResourcePolicy | null;
}