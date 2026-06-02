import type { ViaAPI } from '../../../../com/viaversion/viaversion/api/ViaAPI.d.ts'
import type { ViaManager } from '../../../../com/viaversion/viaversion/api/ViaManager.d.ts'
import type { ViaVersionConfig } from '../../../../com/viaversion/viaversion/api/configuration/ViaVersionConfig.d.ts'
import type { ViaPlatform } from '../../../../com/viaversion/viaversion/api/platform/ViaPlatform.d.ts'
import type { ViaServerProxyPlatform } from '../../../../com/viaversion/viaversion/api/platform/ViaServerProxyPlatform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Via extends Object {
    static getAPI(): ViaAPI<Object>;
    static getConfig(): ViaVersionConfig;
    static getManager(): ViaManager;
    static getPlatform(): ViaPlatform<Object>;
    static init(paramarg0: ViaManager): void;
    static isLoaded(): boolean;
    static proxyPlatform(): ViaServerProxyPlatform<Object>;
    constructor()
}