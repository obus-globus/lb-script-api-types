import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IGlobalPropertyService } from '../../../../org/spongepowered/asm/service/IGlobalPropertyService.d.ts'
import type { IMixinService } from '../../../../org/spongepowered/asm/service/IMixinService.d.ts'
import type { IMixinServiceBootstrap } from '../../../../org/spongepowered/asm/service/IMixinServiceBootstrap.d.ts'
export class MixinService extends Object {
    static boot(): void;
    static getGlobalPropertyService(): IGlobalPropertyService;
    static getService(): IMixinService;
    private constructor()
    // private bootedServices: string[];
    // private bootstrapServiceLoader: IMixinServiceBootstrap[];
    // private propertyService: IGlobalPropertyService;
    // private service: IMixinService;
    // private serviceLoader: IMixinService[];
    // private getGlobalPropertyServiceInstance(): IGlobalPropertyService;
    // private getServiceInstance(): IMixinService;
    // private initPropertyService(): IGlobalPropertyService;
    // private initService(): IMixinService;
    // private runBootServices(): void;
}