import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TruffleLanguageProvider extends Object {
    constructor()
    create(): Object;
    createFileTypeDetectors(): (Object | null)[];
    createInternalResource(resourceId: string): Object;
    getInternalResourceIds(): string[];
    getLanguageClassName(): string;
    getServicesClassNames(): string[];
}