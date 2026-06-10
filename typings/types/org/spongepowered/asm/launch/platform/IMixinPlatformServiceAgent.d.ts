import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinPlatformAgent } from '../../../../../org/spongepowered/asm/launch/platform/IMixinPlatformAgent.d.ts'
import type { IContainerHandle } from '../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IConsumer } from '../../../../../org/spongepowered/asm/util/IConsumer.d.ts'
export interface IMixinPlatformServiceAgent extends Object, IMixinPlatformAgent{
    getMixinContainers(): IContainerHandle[];
    getSideName(): string;
    init(): void;
    unwire(): void;
    wire(arg0: MixinEnvironment$Phase, arg1: IConsumer<MixinEnvironment$Phase>): void;
}