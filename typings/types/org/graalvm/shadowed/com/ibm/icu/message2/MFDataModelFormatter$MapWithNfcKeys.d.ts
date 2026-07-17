import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MFDataModelFormatter$MapWithNfcKeys extends Object {
    constructor()
    constructor(orgMap: JavaMap<string, Object>)
    constructor(org: MFDataModelFormatter$MapWithNfcKeys)
    // private theMap: JavaMap<string, Object>;
    get(key: string): Object;
    getMap(): JavaMap<string, Object>;
    put(key: string, value: Object): Object;
    putAll(m: JavaMap<string, Object | null>): void;
}