import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMixinConfigSource } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigSource.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { Config } from '../../../../org/spongepowered/asm/mixin/transformer/Config.d.ts'
export class Mixins extends Object {
    static addConfiguration(paramarg0: string): void;
    static addConfiguration(paramarg0: string, paramarg1: IMixinConfigSource): void;
    static addConfigurations(...paramarg0: (Object | null)[]): void;
    static addConfigurations(paramarg0: (Object | null)[], paramarg1: IMixinConfigSource): void;
    static getConfigs(): Config[];
    static getErrorHandlerClasses(): string[];
    static getMixinsForClass(paramarg0: string): IMixinInfo[];
    static getUnvisitedCount(): number;
    static registerErrorHandlerClass(paramarg0: string): void;
    private constructor()
}