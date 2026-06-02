import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IObfuscationService } from '../../../../../org/spongepowered/tools/obfuscation/service/IObfuscationService.d.ts'
export class ObfuscationServices extends Object {
    static getInstance(): ObfuscationServices;
    private constructor()
    // private providerInitDone: boolean;
    // private serviceLoader: S[];
    // private services: IObfuscationService[];
    getService(arg0: Class<IObfuscationService>): IObfuscationService;
    getSupportedOptions(): string[];
    initProviders(arg0: IMixinAnnotationProcessor): void;
}