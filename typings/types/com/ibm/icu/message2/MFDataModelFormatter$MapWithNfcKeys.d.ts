import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModelFormatter$MapWithNfcKeys extends Object {
    constructor()
    constructor(arg0: MFDataModelFormatter$MapWithNfcKeys)
    constructor(arg0: JavaMap<string, Object>)
    // private theMap: JavaMap<string, Object>;
    get(arg0: string): Object;
    getMap(): JavaMap<string, Object>;
    put(arg0: string, arg1: Object): Object;
    putAll(arg0: JavaMap<string, Object | null>): void;
}