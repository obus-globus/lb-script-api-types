import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IMixinConfig } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
export interface IMixinInfo extends Object{
    getClassBytes(): number[];
    getClassName(): string;
    getClassNode(arg0: number): ClassNode;
    getClassRef(): string;
    getConfig(): IMixinConfig;
    getName(): string;
    getPhase(): MixinEnvironment$Phase;
    getPriority(): number;
    getTargetClasses(): string[];
    isDetachedSuper(): boolean;
}