import type { TruffleLanguageProvider } from '../../../../com/oracle/truffle/api/provider/TruffleLanguageProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexLanguageProvider extends TruffleLanguageProvider {
    constructor()
    create(): Object;
    createFileTypeDetectors(): (Object | null)[];
    createInternalResource(resourceId: string): Object;
    getInternalResourceIds(): string[];
    getLanguageClassName(): string;
    getServicesClassNames(): E[];
}