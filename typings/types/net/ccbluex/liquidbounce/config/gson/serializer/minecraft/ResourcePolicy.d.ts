import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ResourcePolicy$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/gson/serializer/minecraft/ResourcePolicy$Companion.d.ts'
import type { ServerData$ServerPackStatus } from '../../../../../../../net/minecraft/client/multiplayer/ServerData$ServerPackStatus.d.ts'
export class ResourcePolicy extends Enum<ResourcePolicy> {
    static Companion: ResourcePolicy$Companion;
    static DISABLED: ResourcePolicy;
    static ENABLED: ResourcePolicy;
    static PROMPT: ResourcePolicy;
    static getEntries(): ResourcePolicy[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ResourcePolicy;
    static values(): ResourcePolicy[];
    private constructor(policyName: string)
    readonly policyName: string;
    toMinecraftPolicy(): ServerData$ServerPackStatus;
    name(): "PROMPT" | "ENABLED" | "DISABLED";
}