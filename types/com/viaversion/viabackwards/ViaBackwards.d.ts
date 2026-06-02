import type { ViaBackwardsConfig } from '../../../com/viaversion/viabackwards/api/ViaBackwardsConfig.d.ts'
import type { ViaBackwardsPlatform } from '../../../com/viaversion/viabackwards/api/ViaBackwardsPlatform.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaBackwards extends Object {
    static getConfig(): ViaBackwardsConfig;
    static getPlatform(): ViaBackwardsPlatform;
    static init(paramarg0: ViaBackwardsPlatform, paramarg1: ViaBackwardsConfig): void;
    constructor()
}