import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IMixinConfigPlugin } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigPlugin.d.ts'
import type { IMixinConfigSource } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigSource.d.ts'
export interface IMixinConfig extends Object{
    decorate<V extends unknown>(arg0: string, arg1: V): void;
    getCleanSourceId(): string;
    getDecoration<V extends unknown>(arg0: string): V;
    getEnvironment(): MixinEnvironment;
    getMixinPackage(): string;
    getName(): string;
    getPlugin(): IMixinConfigPlugin;
    getPriority(): number;
    getSource(): IMixinConfigSource;
    getTargets(): string[];
    hasDecoration(arg0: string): boolean;
    isRequired(): boolean;
}