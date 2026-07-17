import type { PolyglotEngineOptions$BytecodeHistogramGrouping } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineOptions$BytecodeHistogramGrouping.d.ts'
import type { PolyglotEngineOptions$BytecodeTransitionKind } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineOptions$BytecodeTransitionKind.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionMap } from '../../../../org/graalvm/options/OptionMap.d.ts'
export class PolyglotEngineOptions extends Object {
    static BytecodeHistogram: OptionKey<PolyglotEngineOptions$BytecodeHistogramGrouping[]>;
    static BytecodeHistogramInterval: OptionKey<Duration>;
    static BytecodeLanguageFilter: OptionKey<string>;
    static BytecodeMethodFilter: OptionKey<string>;
    static IsolateOption: OptionKey<OptionMap<string>>;
    static SourceCacheStatisticDetails: OptionKey<boolean>;
    static SourceCacheStatistics: OptionKey<boolean>;
    static TraceBytecode: OptionKey<boolean>;
    static TraceBytecodeTransition: OptionKey<PolyglotEngineOptions$BytecodeTransitionKind[]>;
    constructor()
}