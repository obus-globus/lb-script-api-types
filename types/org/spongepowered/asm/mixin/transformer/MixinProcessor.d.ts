import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { Level } from '../../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IMixinErrorHandler } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinErrorHandler.d.ts'
import type { MixinConfig } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig.d.ts'
import type { MixinCoprocessorNestHost } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessorNestHost.d.ts'
import type { MixinProcessor$ErrorPhase } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinProcessor$ErrorPhase.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { IHotSwap } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/IHotSwap.d.ts'
import type { InvalidMixinException } from '../../../../../org/spongepowered/asm/mixin/transformer/throwables/InvalidMixinException.d.ts'
import type { IMixinAuditTrail } from '../../../../../org/spongepowered/asm/service/IMixinAuditTrail.d.ts'
import type { IMixinService } from '../../../../../org/spongepowered/asm/service/IMixinService.d.ts'
import type { ReEntranceLock } from '../../../../../org/spongepowered/asm/util/ReEntranceLock.d.ts'
import type { Profiler } from '../../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
export class MixinProcessor extends Object {
    constructor(arg0: MixinEnvironment, arg1: Extensions, arg2: IHotSwap, arg3: MixinCoprocessorNestHost)
    // private auditTrail: IMixinAuditTrail;
    // private configs: MixinConfig[];
    // private coprocessors: (Object | null)[];
    // private currentEnvironment: MixinEnvironment;
    // private errorState: boolean;
    // private extensions: Extensions;
    // private hotSwapper: IHotSwap;
    // private lock: ReEntranceLock;
    // private pendingConfigs: MixinConfig[];
    // private profiler: Profiler;
    // private service: IMixinService;
    // private sessionId: string;
    // private transformedCount: number;
    // private verboseLoggingLevel: Level;
    applyMixins(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
    audit(arg0: MixinEnvironment): void;
    // private checkSelect(arg0: MixinEnvironment): void;
    couldTransformClass(arg0: MixinEnvironment, arg1: string): boolean;
    // private dumpClassOnFailure(arg0: string, arg1: ClassNode, arg2: MixinEnvironment): void;
    // private getErrorHandlers(arg0: MixinEnvironment$Phase): IMixinErrorHandler[];
    // private getInvalidClassError(arg0: string, arg1: ClassNode, arg2: MixinConfig): string;
    // private handleMixinApplyError(arg0: string, arg1: InvalidMixinException, arg2: MixinEnvironment): void;
    // private handleMixinError(arg0: string, arg1: InvalidMixinException, arg2: MixinEnvironment, arg3: MixinProcessor$ErrorPhase): void;
    // private handleMixinPrepareError(arg0: MixinConfig, arg1: InvalidMixinException, arg2: MixinEnvironment): void;
    // private lockAndSelect(arg0: MixinEnvironment, arg1: string): boolean;
    // private prepareConfigs(arg0: MixinEnvironment, arg1: Extensions): number;
    reload(arg0: string, arg1: ClassNode): string[];
    // private select(arg0: MixinEnvironment): void;
    // private selectConfigs(arg0: MixinEnvironment): void;
}