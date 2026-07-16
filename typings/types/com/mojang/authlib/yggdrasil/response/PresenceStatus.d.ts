import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PresenceStatus extends Enum<PresenceStatus> {
    static OFFLINE: PresenceStatus;
    static ONLINE: PresenceStatus;
    static PLAYING_HOSTED_SERVER: PresenceStatus;
    static PLAYING_OFFLINE: PresenceStatus;
    static PLAYING_REALMS: PresenceStatus;
    static PLAYING_SERVER: PresenceStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PresenceStatus;
    static values(): PresenceStatus[];
    private constructor()
    name(): "ONLINE" | "PLAYING_OFFLINE" | "PLAYING_REALMS" | "PLAYING_SERVER" | "PLAYING_HOSTED_SERVER" | "OFFLINE";
}