import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinConfigPlugin } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigPlugin.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class LithiumMixinPlugin extends Object implements IMixinConfigPlugin {
    static DEBUG: boolean;
    constructor()
    // private logger: Logger;
    acceptTargets(arg0: string[], arg1: string[]): void;
    getMixins(): string[];
    getRefMapperConfig(): string;
    onLoad(arg0: string): void;
    postApply(arg0: string, arg1: ClassNode, arg2: string, arg3: IMixinInfo): void;
    preApply(arg0: string, arg1: ClassNode, arg2: string, arg3: IMixinInfo): void;
    shouldApplyMixin(arg0: string, arg1: string): boolean;
}