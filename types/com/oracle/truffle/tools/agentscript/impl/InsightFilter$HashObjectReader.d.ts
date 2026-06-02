import type { InsightFilter$ObjectReader } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightFilter$ObjectReader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class InsightFilter$HashObjectReader extends InsightFilter$ObjectReader {
    constructor(object: Object, properties: string[])
    // private map: EconomicMap<string, Object>;
    get(propertyName: string): Object;
}