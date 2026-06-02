import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinEnvironment$Phase } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IConsumer } from '../../../../org/spongepowered/asm/util/IConsumer.d.ts'
export class MixinEnvironment$PhaseConsumer extends Object implements IConsumer<MixinEnvironment$Phase> {
    constructor()
    accept(arg0: MixinEnvironment$Phase): void;
}