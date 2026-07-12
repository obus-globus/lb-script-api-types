import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguageProvider } from '../../../../com/oracle/truffle/api/provider/TruffleLanguageProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LanguageCache$HostLanguageProvider extends TruffleLanguageProvider {
    constructor(languageInstance: TruffleLanguage<Object>, ...services: string[])
    // private languageInstance: TruffleLanguage<Object>;
    readonly servicesClassNames: string[];
    create(): Object;
    createFileTypeDetectors(): TruffleLanguageProvider[];
    getLanguageClassName(): string;
    getServicesClassNames(): string[];
}