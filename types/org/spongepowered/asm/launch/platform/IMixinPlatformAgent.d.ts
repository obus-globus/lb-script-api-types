import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinPlatformAgent$AcceptResult } from '../../../../../org/spongepowered/asm/launch/platform/IMixinPlatformAgent$AcceptResult.d.ts'
import type { MixinPlatformManager } from '../../../../../org/spongepowered/asm/launch/platform/MixinPlatformManager.d.ts'
import type { IContainerHandle } from '../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
export interface IMixinPlatformAgent extends Object{
    accept(arg0: MixinPlatformManager, arg1: IContainerHandle): IMixinPlatformAgent$AcceptResult;
    getPhaseProvider(): string;
    initPrimaryContainer(): void;
    inject(): void;
    prepare(): void;
}