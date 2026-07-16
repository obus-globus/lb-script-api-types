import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { MixinConfig$IListener } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig$IListener.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
export class MixinInheritanceTracker extends Enum<MixinInheritanceTracker> implements MixinConfig$IListener {
    static INSTANCE: MixinInheritanceTracker;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MixinInheritanceTracker;
    static values(): MixinInheritanceTracker[];
    private constructor()
    // private parentMixins: { [key: string]: MixinInfo[] };
    findOverrides(arg0: string, arg1: string, arg2: string): MethodNode[];
    findOverrides(arg0: ClassInfo, arg1: string, arg2: string): MethodNode[];
    onInit(arg0: MixinInfo): void;
    onPrepare(arg0: MixinInfo): void;
    name(): "INSTANCE";
}