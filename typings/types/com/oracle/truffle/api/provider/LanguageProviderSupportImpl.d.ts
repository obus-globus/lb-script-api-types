import type { InternalResource } from '../../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { TruffleFile$FileTypeDetector } from '../../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { Accessor$LanguageProviderSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$LanguageProviderSupport.d.ts'
import type { InternalResourceProvider } from '../../../../../com/oracle/truffle/api/provider/InternalResourceProvider.d.ts'
import type { TruffleLanguageProvider } from '../../../../../com/oracle/truffle/api/provider/TruffleLanguageProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LanguageProviderSupportImpl extends Accessor$LanguageProviderSupport {
    constructor()
    create(provider: TruffleLanguageProvider): Object;
    createFileTypeDetectors(provider: TruffleLanguageProvider): TruffleFile$FileTypeDetector[];
    createInternalResource(provider: InternalResourceProvider): InternalResource;
    createInternalResource(provider: TruffleLanguageProvider, resourceId: string): InternalResource;
    getInternalResourceComponentId(provider: InternalResourceProvider): string;
    getInternalResourceId(provider: InternalResourceProvider): string;
    getInternalResourceIds(provider: TruffleLanguageProvider): string[];
    getLanguageClassName(provider: TruffleLanguageProvider): string;
    getServicesClassNames(provider: TruffleLanguageProvider): string[];
}