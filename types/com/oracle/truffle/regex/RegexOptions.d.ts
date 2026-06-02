import type { TruffleLanguage$ParsingRequest } from '../../../../com/oracle/truffle/api/TruffleLanguage$ParsingRequest.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { RegexOptions$Builder } from '../../../../com/oracle/truffle/regex/RegexOptions$Builder.d.ts'
import type { RegexOptions$FlavorOption } from '../../../../com/oracle/truffle/regex/RegexOptions$FlavorOption.d.ts'
import type { MatchingMode } from '../../../../com/oracle/truffle/regex/tregex/parser/MatchingMode.d.ts'
import type { RegexFlavor } from '../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { Encodings$Encoding } from '../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
export class RegexOptions extends Object {
    static ALWAYS_EAGER_NAME: string;
    static AlwaysEager: OptionKey<boolean>;
    static BOOLEAN_MATCH_NAME: string;
    static BooleanMatch: OptionKey<boolean>;
    static DEFAULT: RegexOptions;
    static DUMP_AUTOMATA_NAME: string;
    static DumpAutomata: OptionKey<boolean>;
    static DumpAutomataExecution: OptionKey<boolean>;
    static ENCODING_NAME: string;
    static Encoding: OptionKey<Encodings$Encoding>;
    static FLAVOR_ECMASCRIPT: string;
    static FLAVOR_JAVA: string;
    static FLAVOR_NAME: string;
    static FLAVOR_ORACLE_DB: string;
    static FLAVOR_PYTHON: string;
    static FLAVOR_RUBY: string;
    static Flavor: OptionKey<RegexOptions$FlavorOption>;
    static ForceLinearExecution: OptionKey<boolean>;
    static GENERATE_INPUT_NAME: string;
    static GenerateDFAImmediately: OptionKey<boolean>;
    static GenerateInput: OptionKey<boolean>;
    static IGNORE_ATOMIC_GROUPS_NAME: string;
    static IgnoreAtomicGroups: OptionKey<boolean>;
    static JAVA_JDK_VERSION_MIN: number;
    static JAVA_JDK_VERSION_NAME: string;
    static JAVA_JDK_VERSION_OPTIONS: (Object | null)[];
    static JavaJDKVersion: OptionKey<number>;
    static MATCHING_MODE_FULLMATCH: string;
    static MATCHING_MODE_MATCH: string;
    static MATCHING_MODE_NAME: string;
    static MATCHING_MODE_SEARCH: string;
    static MAX_BACK_TRACKER_SIZE_NAME: string;
    static MAX_DFA_SIZE_NAME: string;
    static MUST_ADVANCE_NAME: string;
    static MatchingMode: OptionKey<MatchingMode>;
    static MaxBackTrackerJITSize: OptionKey<number>;
    static MaxDFASize: OptionKey<number>;
    static MustAdvance: OptionKey<boolean>;
    static PYTHON_LOCALE_NAME: string;
    static PYTHON_METHOD_NAME: string;
    static PythonLocale: OptionKey<string>;
    static QuantifierUnrollLimitGroup: OptionKey<number>;
    static QuantifierUnrollLimitSingleCC: OptionKey<number>;
    static REGRESSION_TEST_MODE_NAME: string;
    static RegressionTestMode: OptionKey<boolean>;
    static STEP_EXECUTION_NAME: string;
    static U180EWhitespace: OptionKey<boolean>;
    static U180E_WHITESPACE_NAME: string;
    static UTF_16_EXPLODE_ASTRAL_SYMBOLS_NAME: string;
    static VALIDATE_NAME: string;
    static Validate: OptionKey<boolean>;
    static builder(paramparsingRequest: TruffleLanguage$ParsingRequest): RegexOptions$Builder;
    static builder(paramsource: Source, paramoptionValues: OptionValues): RegexOptions$Builder;
    static getDescriptors(): OptionDescriptor[];
    private constructor(options: number, maxDFASize: number, maxBackTrackerCompileSize: number, flavor: RegexFlavor, encoding: Encodings$Encoding, matchingMode: MatchingMode, pythonLocale: string, javaJDKVersion: number, quantifierUnrollLimitSingleCC: number, quantifierUnrollLimitGroup: number)
    readonly encoding: Encodings$Encoding;
    readonly flavor: RegexFlavor;
    readonly javaJDKVersion: number;
    readonly matchingMode: MatchingMode;
    readonly maxBackTrackerCompileSize: number;
    readonly maxDFASize: number;
    // private options: number;
    readonly pythonLocale: string;
    quantifierUnrollLimitGroup: number;
    quantifierUnrollLimitSingleCC: number;
    equals(obj: Object | null): boolean;
    getEncoding(): Encodings$Encoding;
    getFlavor(): RegexFlavor;
    getJavaJDKVersion(): number;
    getMatchingMode(): MatchingMode;
    getMaxBackTrackerCompileSize(): number;
    getMaxDFASize(): number;
    getPythonLocale(): string;
    hashCode(): number;
    isAlwaysEager(): boolean;
    // private isBitSet(bit: number): boolean;
    isBooleanMatch(): boolean;
    isDumpAutomata(): boolean;
    isDumpAutomataWithSourceSections(): boolean;
    isForceLinearExecution(): boolean;
    isGenerateDFAImmediately(): boolean;
    isGenerateInput(): boolean;
    isIgnoreAtomicGroups(): boolean;
    isMustAdvance(): boolean;
    isRegressionTestMode(): boolean;
    isStepExecution(): boolean;
    isU180EWhitespace(): boolean;
    isUTF16ExplodeAstralSymbols(): boolean;
    isValidate(): boolean;
    toString(): string;
    withBooleanMatch(): RegexOptions;
    withoutBooleanMatch(): RegexOptions;
}