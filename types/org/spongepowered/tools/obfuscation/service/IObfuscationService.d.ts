import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
export interface IObfuscationService extends Object{
    getObfuscationTypes(arg0: IMixinAnnotationProcessor): E[];
    getSupportedOptions(): string[];
}