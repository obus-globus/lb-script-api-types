import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinConfigPlugin } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigPlugin.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { MixinConfig } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { PluginHandle$CompatibilityMode } from '../../../../../org/spongepowered/asm/mixin/transformer/PluginHandle$CompatibilityMode.d.ts'
import type { IMixinService } from '../../../../../org/spongepowered/asm/service/IMixinService.d.ts'
export class PluginHandle extends Object {
    constructor(arg0: MixinConfig, arg1: IMixinService, arg2: string)
    // private mdPostApply: Method;
    // private mdPreApply: Method;
    // private mode: PluginHandle$CompatibilityMode;
    // private parent: MixinConfig;
    // private plugin: IMixinConfigPlugin;
    // private apiError(arg0: string): string;
    // private applyLegacy(arg0: Method, arg1: string, arg2: ClassNode, arg3: string, arg4: IMixinInfo): void;
    get(): IMixinConfigPlugin;
    getMixins(): string[];
    getRefMapperConfig(): string;
    // private initReflection(): void;
    isAvailable(): boolean;
    onLoad(arg0: string): void;
    postApply(arg0: string, arg1: ClassNode, arg2: string, arg3: MixinInfo): void;
    preApply(arg0: string, arg1: ClassNode, arg2: string, arg3: MixinInfo): void;
    shouldApplyMixin(arg0: string, arg1: string): boolean;
}