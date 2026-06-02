import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IExtensionRegistry } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/IExtensionRegistry.d.ts'
export interface IMixinTransformer extends Object{
    audit(arg0: MixinEnvironment): void;
    computeFramesForClass(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
    couldTransformClass(arg0: MixinEnvironment, arg1: string): boolean;
    generateClass(arg0: MixinEnvironment, arg1: string): number[];
    generateClass(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
    getExtensions(): IExtensionRegistry;
    reload(arg0: string, arg1: ClassNode): string[];
    transformClass(arg0: MixinEnvironment, arg1: string, arg2: number[]): number[];
    transformClass(arg0: MixinEnvironment, arg1: string, arg2: ClassNode): boolean;
    transformClassBytes(arg0: string, arg1: string, arg2: number[]): number[];
}