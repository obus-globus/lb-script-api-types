import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IObfuscationService } from '../../../../../org/spongepowered/tools/obfuscation/service/IObfuscationService.d.ts'
export class ObfuscationServiceFG3 extends Object implements IObfuscationService {
    static OUT_TSRG_SRG_FILE: string;
    static REOBF_EXTRA_TSRG_FILES: string;
    static REOBF_TSRG_FILE: string;
    static SEARGE: string;
    static TSRG_OUTPUT_BEHAVIOUR: string;
    constructor()
    getObfuscationTypes(arg0: IMixinAnnotationProcessor): E[];
    getSupportedOptions(): string[];
}