import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IObfuscationService } from '../../../../../org/spongepowered/tools/obfuscation/service/IObfuscationService.d.ts'
import type { ObfuscationTypeDescriptor } from '../../../../../org/spongepowered/tools/obfuscation/service/ObfuscationTypeDescriptor.d.ts'
export class ObfuscationServiceMCP extends Object implements IObfuscationService {
    static NOTCH: string;
    static OUT_NOTCH_SRG_FILE: string;
    static OUT_SRG_SRG_FILE: string;
    static REOBF_EXTRA_NOTCH_FILES: string;
    static REOBF_EXTRA_SRG_FILES: string;
    static REOBF_NOTCH_FILE: string;
    static REOBF_SRG_FILE: string;
    static SEARGE: string;
    constructor()
    getObfuscationTypes(arg0: IMixinAnnotationProcessor): ObfuscationTypeDescriptor[];
    getSupportedOptions(): string[];
}