import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinPlatformManager } from '../../../../org/spongepowered/asm/launch/platform/MixinPlatformManager.d.ts'
export abstract class MixinBootstrap extends Object {
    static VERSION: string;
    static addProxy(): void;
    static getPlatform(): MixinPlatformManager;
    static init(): void;
    private constructor()
}