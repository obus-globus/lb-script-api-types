import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IMixinTransformer } from '../../../../../org/spongepowered/asm/mixin/transformer/IMixinTransformer.d.ts'
import type { MixinClassGenerator } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinClassGenerator.d.ts'
import type { MixinCoprocessorNestHost } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessorNestHost.d.ts'
import type { MixinProcessor } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinProcessor.d.ts'
import type { SyntheticClassRegistry } from '../../../../../org/spongepowered/asm/mixin/transformer/SyntheticClassRegistry.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { IExtensionRegistry } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/IExtensionRegistry.d.ts'
import type { IHotSwap } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/IHotSwap.d.ts'
import type { TreeTransformer } from '../../../../../org/spongepowered/asm/transformers/TreeTransformer.d.ts'
export class MixinTransformer extends TreeTransformer implements IMixinTransformer {
    constructor()
    readonly extensions: Extensions;
    // private generator: MixinClassGenerator;
    // private hotSwapper: IHotSwap;
    // private nestHostCoprocessor: MixinCoprocessorNestHost;
    // private processor: MixinProcessor;
    // private syntheticClassRegistry: SyntheticClassRegistry;
    audit(arg0: MixinEnvironment): void;
    computeFramesForClass(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
    couldTransformClass(arg0: MixinEnvironment, arg1: string): boolean;
    generateClass(arg0: MixinEnvironment, arg1: string): number[];
    generateClass(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
    getExtensions(): IExtensionRegistry;
    getName(): string;
    // private initHotSwapper(arg0: MixinEnvironment): IHotSwap;
    isDelegationExcluded(): boolean;
    reload(arg0: string, arg1: ClassNode): string[];
    transformClass(arg0: MixinEnvironment, arg1: string, arg2: number[]): number[];
    transformClass(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
    transformClassBytes(arg0: string, arg1: string, arg2: number[]): number[];
}