import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { MixinApplicatorStandard } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinApplicatorStandard.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { TargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/TargetClassContext.d.ts'
import type { Clinit } from '../../../../../org/spongepowered/asm/mixin/transformer/struct/Clinit.d.ts'
export class MixinApplicatorInterface extends MixinApplicatorStandard {
    constructor(arg0: TargetClassContext)
    applyClinit(arg0: MixinTargetContext, arg1: () => Clinit): void;
    applyClinitLegacy(arg0: MixinTargetContext): void;
    applyInitialisers(arg0: MixinTargetContext): void;
    applyInjections(arg0: MixinTargetContext, arg1: number): void;
    applyInterfaces(arg0: MixinTargetContext): void;
    applyPreInjections(arg0: MixinTargetContext): void;
    mergeNewFields(arg0: MixinTargetContext): void;
    mergeShadowFields(arg0: MixinTargetContext): void;
    prepareInjections(arg0: MixinTargetContext): void;
}