import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TruffleInstrumentProvider extends Object {
    constructor()
    create(): Object;
    createInternalResource(resourceId: string): Object;
    getInstrumentClassName(): string;
    getInternalResourceIds(): string[];
    getServicesClassNames(): string[];
}