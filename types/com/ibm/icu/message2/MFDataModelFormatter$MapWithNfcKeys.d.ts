import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModelFormatter$MapWithNfcKeys extends Object {
    constructor()
    constructor(arg0: MFDataModelFormatter$MapWithNfcKeys)
    constructor(arg0: { [key: string]: Object })
    // private theMap: { [key: string]: Object };
    get(arg0: string): Object;
    getMap(): { [key: string]: Object };
    put(arg0: string, arg1: Object): Object;
    putAll(arg0: { [key: string]: Object | null }): void;
}