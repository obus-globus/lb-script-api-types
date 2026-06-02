import type { UResource$Key } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { CompactData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/CompactData.d.ts'
export class CompactData$CompactDataSink extends UResource$Sink {
    constructor(data: CompactData)
    // private data: CompactData;
    put(key: UResource$Key, value: UResource$Value, isRoot: boolean): void;
}