import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IMixinConfig } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { IMixinConfigSource } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigSource.d.ts'
import type { MixinConfig } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig.d.ts'
export class Config extends Object {
    static create(paramarg0: string, paramarg1: MixinEnvironment): Config;
    static create(paramarg0: string, paramarg1: MixinEnvironment, paramarg2: IMixinConfigSource): Config;
    static create(paramarg0: string, paramarg1: IMixinConfigSource): Config;
    constructor(arg0: MixinConfig)
    readonly config: MixinConfig;
    readonly name: string;
    equals(arg0: Object | null): boolean;
    get(): MixinConfig;
    getConfig(): IMixinConfig;
    getEnvironment(): MixinEnvironment;
    getName(): string;
    getParent(): Config;
    hashCode(): number;
    isVisited(): boolean;
    toString(): string;
}