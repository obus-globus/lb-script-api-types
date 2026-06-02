import type { HotSpotTruffleCompiler } from '../../../../../../com/oracle/truffle/compiler/hotspot/HotSpotTruffleCompiler.d.ts'
import type { HotSpotTruffleRuntime } from '../../../../../../com/oracle/truffle/runtime/hotspot/HotSpotTruffleRuntime.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibGraalHotSpotTruffleCompiler extends Object implements HotSpotTruffleCompiler {
    static FIRST_TIER_COMPILATION_SUFFIX: string;
    static SECOND_TIER_COMPILATION_SUFFIX: string;
    constructor(runtime: HotSpotTruffleRuntime)
}