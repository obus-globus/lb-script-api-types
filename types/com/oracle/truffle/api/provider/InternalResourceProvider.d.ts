import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InternalResourceProvider extends Object {
    constructor()
    createInternalResource(): Object;
    getComponentId(): string;
    getResourceId(): string;
}