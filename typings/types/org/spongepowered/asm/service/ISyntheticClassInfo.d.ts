import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export interface ISyntheticClassInfo extends Object{
    getClassName(): string;
    getMixin(): IMixinInfo;
    getName(): string;
    isLoaded(): boolean;
}