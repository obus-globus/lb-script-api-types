import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinPlatformAgent } from '../../../../../org/spongepowered/asm/launch/platform/IMixinPlatformAgent.d.ts'
import type { IMixinPlatformAgent$AcceptResult } from '../../../../../org/spongepowered/asm/launch/platform/IMixinPlatformAgent$AcceptResult.d.ts'
import type { MixinPlatformManager } from '../../../../../org/spongepowered/asm/launch/platform/MixinPlatformManager.d.ts'
import type { IContainerHandle } from '../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IConsumer } from '../../../../../org/spongepowered/asm/util/IConsumer.d.ts'
export abstract class MixinPlatformAgentAbstract extends Object implements IMixinPlatformAgent {
    constructor()
    // private handle: IContainerHandle;
    // private manager: MixinPlatformManager;
    accept(arg0: MixinPlatformManager, arg1: IContainerHandle): IMixinPlatformAgent$AcceptResult;
    getPhaseProvider(): string;
    initPrimaryContainer(): void;
    inject(): void;
    prepare(): void;
    toString(): string;
    unwire(): void;
    wire(arg0: MixinEnvironment$Phase, arg1: IConsumer<MixinEnvironment$Phase>): void;
}