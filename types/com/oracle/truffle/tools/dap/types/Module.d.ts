import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Module extends JSONBase {
    static create(paramid: Object, paramname: string): Module;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAddressRange(): string;
    getDateTimeStamp(): string;
    getId(): Object;
    getIsOptimized(): boolean;
    getIsUserCode(): boolean;
    getName(): string;
    getPath(): string;
    getSymbolFilePath(): string;
    getSymbolStatus(): string;
    getVersion(): string;
    hashCode(): number;
    setAddressRange(addressRange: string): Module;
    setDateTimeStamp(dateTimeStamp: string): Module;
    setId(id: Object): Module;
    setIsOptimized(isOptimized: boolean): Module;
    setIsUserCode(isUserCode: boolean): Module;
    setName(name: string): Module;
    setPath(path: string): Module;
    setSymbolFilePath(symbolFilePath: string): Module;
    setSymbolStatus(symbolStatus: string): Module;
    setVersion(version: string): Module;
}