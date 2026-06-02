import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ICUService$Key extends Object {
    constructor(id: string)
    // private id: string;
    canonicalID(): string;
    currentDescriptor(): string;
    currentID(): string;
    fallback(): boolean;
    id(): string;
    isFallbackOf(idToCheck: string): boolean;
}