import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { WbemcliUtil } from '../../../../../../com/sun/jna/platform/win32/COM/WbemcliUtil.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WbemcliUtil$WmiResult<T extends Enum<T>> extends Object {
    constructor(null_: WbemcliUtil, arg1: Class<T>)
    // private cimTypeMap: JavaMap<T, number>;
    // private propertyMap: JavaMap<T, Object[]>;
    readonly resultCount: number;
    // private vtTypeMap: JavaMap<T, number>;
    // private add(arg0: number, arg1: number, arg2: T, arg3: Object): void;
    getCIMType(arg0: T): number;
    getResultCount(): number;
    getValue(arg0: T, arg1: number): Object;
    getVtType(arg0: T): number;
    // private incrementResultCount(): void;
}