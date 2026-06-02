import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMixinServiceBootstrap } from '../../../../../../org/spongepowered/asm/service/IMixinServiceBootstrap.d.ts'
export class MixinServiceKnotBootstrap extends Object implements IMixinServiceBootstrap {
    constructor()
    bootstrap(): void;
    getName(): string;
    getServiceClassName(): string;
}