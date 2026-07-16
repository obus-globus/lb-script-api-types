import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ResourcePackAction extends Enum<ResourcePackAction> {
    static ACCEPTED: ResourcePackAction;
    static DECLINED: ResourcePackAction;
    static DISCARDED: ResourcePackAction;
    static DOWNLOADED: ResourcePackAction;
    static FAILED_DOWNLOAD: ResourcePackAction;
    static FAILED_RELOAD: ResourcePackAction;
    static INVALID_URL: ResourcePackAction;
    static SUCCESSFULLY_LOADED: ResourcePackAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResourcePackAction;
    static values(): ResourcePackAction[];
    private constructor()
    name(): "SUCCESSFULLY_LOADED" | "DECLINED" | "FAILED_DOWNLOAD" | "ACCEPTED" | "DOWNLOADED" | "INVALID_URL" | "FAILED_RELOAD" | "DISCARDED";
}