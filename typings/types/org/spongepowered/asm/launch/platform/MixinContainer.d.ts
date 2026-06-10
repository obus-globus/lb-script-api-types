import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinPlatformAgent } from '../../../../../org/spongepowered/asm/launch/platform/IMixinPlatformAgent.d.ts'
import type { MixinPlatformManager } from '../../../../../org/spongepowered/asm/launch/platform/MixinPlatformManager.d.ts'
import type { IContainerHandle } from '../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
export class MixinContainer extends Object {
    constructor(arg0: MixinPlatformManager, arg1: IContainerHandle)
    // private agents: IMixinPlatformAgent[];
    // private handle: IContainerHandle;
    getDescriptor(): IContainerHandle;
    getPhaseProviders(): string[];
    initPrimaryContainer(): void;
    inject(): void;
    prepare(): void;
}