import type { StringReader_v1_12 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/v1_12/StringReader_v1_12.d.ts'
import type { SNbtDeserializer_v1_13 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/v1_13/SNbtDeserializer_v1_13.d.ts'
export class SNbtDeserializer_v1_14 extends SNbtDeserializer_v1_13 {
    constructor()
    isQuote(arg0: string): boolean;
    makeReader(arg0: string): StringReader_v1_12;
}