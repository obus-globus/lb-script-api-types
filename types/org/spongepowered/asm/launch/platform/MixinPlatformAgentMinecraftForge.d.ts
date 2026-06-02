import type { IMixinPlatformAgent$AcceptResult } from '../../../../../org/spongepowered/asm/launch/platform/IMixinPlatformAgent$AcceptResult.d.ts'
import type { IMixinPlatformServiceAgent } from '../../../../../org/spongepowered/asm/launch/platform/IMixinPlatformServiceAgent.d.ts'
import type { MixinPlatformAgentAbstract } from '../../../../../org/spongepowered/asm/launch/platform/MixinPlatformAgentAbstract.d.ts'
import type { MixinPlatformManager } from '../../../../../org/spongepowered/asm/launch/platform/MixinPlatformManager.d.ts'
import type { IContainerHandle } from '../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
export class MixinPlatformAgentMinecraftForge extends MixinPlatformAgentAbstract implements IMixinPlatformServiceAgent {
    constructor()
    accept(arg0: MixinPlatformManager, arg1: IContainerHandle): IMixinPlatformAgent$AcceptResult;
    getMixinContainers(): E[];
    getSideName(): string;
    init(): void;
}