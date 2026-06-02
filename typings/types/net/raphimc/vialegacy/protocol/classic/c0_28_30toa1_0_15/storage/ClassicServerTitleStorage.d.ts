import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class ClassicServerTitleStorage extends StoredObject {
    constructor(arg0: UserConnection, arg1: string, arg2: string)
    readonly motd: string;
    readonly title: string;
    getMotd(): string;
    getTitle(): string;
    isFlyDisabled(): boolean;
    isFlyEffectivelyEnabled(): boolean;
    isFlyEnabled(): boolean;
    isHaxDisabled(): boolean;
    isHaxEnabled(): boolean;
    isNoclipDisabled(): boolean;
    isNoclipEffectivelyEnabled(): boolean;
    isNoclipEnabled(): boolean;
    isOphaxEnabled(): boolean;
    isRespawnDisabled(): boolean;
    isRespawnEffectivelyEnabled(): boolean;
    isRespawnEnabled(): boolean;
    isSpeedDisabled(): boolean;
    isSpeedEffectivelyEnabled(): boolean;
    isSpeedEnabled(): boolean;
}