import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ISyntheticClassInfo } from '../../../../../org/spongepowered/asm/service/ISyntheticClassInfo.d.ts'
export abstract class SyntheticClassInfo extends Object implements ISyntheticClassInfo {
    constructor(arg0: IMixinInfo, arg1: string)
    readonly mixin: IMixinInfo;
    readonly name: string;
    getClassName(): string;
    getMixin(): IMixinInfo;
    getName(): string;
    isLoaded(): boolean;
}