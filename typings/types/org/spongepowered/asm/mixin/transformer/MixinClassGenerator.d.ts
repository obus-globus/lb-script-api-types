import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { IMixinAuditTrail } from '../../../../../org/spongepowered/asm/service/IMixinAuditTrail.d.ts'
import type { Profiler } from '../../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
export class MixinClassGenerator extends Object {
    constructor(arg0: MixinEnvironment, arg1: Extensions)
    // private auditTrail: IMixinAuditTrail;
    // private extensions: Extensions;
    // private profiler: Profiler;
    generateClass(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
}