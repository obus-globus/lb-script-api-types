import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OpDescriptor extends Object {
    constructor()
    perform(affected: Object | null): Object | null;
}