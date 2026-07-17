import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MFDataModelFormatter$MapWithNfcKeys extends Object {
    constructor()
    constructor(orgMap: { [key: string]: Object })
    constructor(org: MFDataModelFormatter$MapWithNfcKeys)
    // private theMap: { [key: string]: Object };
    get(key: string): Object;
    getMap(): { [key: string]: Object };
    put(key: string, value: Object): Object;
    putAll(m: { [key: string]: Object | null }): void;
}