import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Checksum extends JSONBase {
    static create(paramalgorithm: string, paramchecksum: string): Checksum;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAlgorithm(): string;
    getChecksum(): string;
    hashCode(): number;
    setAlgorithm(algorithm: string): Checksum;
    setChecksum(checksum: string): Checksum;
}