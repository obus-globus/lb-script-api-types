import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinConfigPlugin } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigPlugin.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class ViaFabricPlusMixinPlugin extends Object implements IMixinConfigPlugin {
    static IPNEXT_PRESENT: boolean;
    static LEGACY_PRESENT: boolean;
    static LEGENDARYTOOLTIPS_PRESENT: boolean;
    static LITHIUM_PRESENT: boolean;
    static MOONRISE_PRESENT: boolean;
    static MORE_CULLING_PRESENT: boolean;
    constructor()
    acceptTargets(arg0: string[], arg1: string[]): void;
    getMixins(): string[];
    getRefMapperConfig(): string;
    onLoad(arg0: string): void;
    postApply(arg0: string, arg1: ClassNode, arg2: string, arg3: IMixinInfo): void;
    preApply(arg0: string, arg1: ClassNode, arg2: string, arg3: IMixinInfo): void;
    shouldApplyMixin(arg0: string, arg1: string): boolean;
}