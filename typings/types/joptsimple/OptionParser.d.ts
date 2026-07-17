import type { JavaMap } from '../JavaMap.d.ts'
import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { Writer } from '../java/io/Writer.d.ts'
import type { AbstractOptionSpec } from '../joptsimple/AbstractOptionSpec.d.ts'
import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { HelpFormatter } from '../joptsimple/HelpFormatter.d.ts'
import type { NonOptionArgumentSpec } from '../joptsimple/NonOptionArgumentSpec.d.ts'
import type { OptionDeclarer } from '../joptsimple/OptionDeclarer.d.ts'
import type { OptionParserState } from '../joptsimple/OptionParserState.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
import type { OptionSpec } from '../joptsimple/OptionSpec.d.ts'
import type { OptionSpecBuilder } from '../joptsimple/OptionSpecBuilder.d.ts'
import type { OptionNameMap } from '../joptsimple/internal/OptionNameMap.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class OptionParser extends Object implements OptionDeclarer {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: string)
    // private allowsUnrecognizedOptions: boolean;
    // private availableIf: JavaMap<string[], OptionSpec<Object>[]>;
    // private availableUnless: JavaMap<string[], OptionSpec<Object>[]>;
    // private helpFormatter: HelpFormatter;
    // private posixlyCorrect: boolean;
    // private recognizedOptions: OptionNameMap<AbstractOptionSpec<Object>>;
    // private requiredIf: JavaMap<string[], OptionSpec<Object>[]>;
    // private requiredUnless: JavaMap<string[], OptionSpec<Object>[]>;
    // private state: OptionParserState;
    // private trainingOrder: AbstractOptionSpec<Object>[];
    // private _recognizedOptions(): JavaMap<string, AbstractOptionSpec<Object>>;
    accepts(arg0: string): OptionSpecBuilder;
    accepts(arg0: string, arg1: string): OptionSpecBuilder;
    acceptsAll(arg0: string[]): OptionSpecBuilder;
    acceptsAll(arg0: string[], arg1: string): OptionSpecBuilder;
    allowsUnrecognizedOptions(): void;
    availableIf(arg0: string[], arg1: OptionSpec<Object>): void;
    availableIf(arg0: string[], arg1: string): void;
    availableUnless(arg0: string[], arg1: OptionSpec<Object>): void;
    availableUnless(arg0: string[], arg1: string): void;
    doesAllowsUnrecognizedOptions(): boolean;
    // private ensureAllowedOptions(arg0: OptionSet): void;
    // private ensureRequiredOptions(arg0: OptionSet): void;
    formatHelpWith(arg0: HelpFormatter): void;
    handleLongOptionToken(arg0: string, arg1: ArgumentList, arg2: OptionSet): void;
    handleNonOptionArgument(arg0: string, arg1: ArgumentList, arg2: OptionSet): void;
    // private handleShortOptionCluster(arg0: string, arg1: ArgumentList, arg2: OptionSet): void;
    handleShortOptionToken(arg0: string, arg1: ArgumentList, arg2: OptionSet): void;
    // private isHelpOptionPresent(arg0: OptionSet): boolean;
    isRecognized(arg0: string): boolean;
    looksLikeAnOption(arg0: string): boolean;
    // private missingRequiredOptions(arg0: OptionSet): AbstractOptionSpec<Object>[];
    mutuallyExclusive(...arg0: OptionSpecBuilder[]): void;
    noMoreOptions(): void;
    nonOptions(): NonOptionArgumentSpec<string>;
    nonOptions(arg0: string): NonOptionArgumentSpec<string>;
    // private optionsHasAnyOf(arg0: OptionSet, arg1: OptionSpec<Object>[]): boolean;
    parse(...arg0: string[]): OptionSet;
    posixlyCorrect(): boolean;
    posixlyCorrect(arg0: boolean): void;
    printHelpOn(arg0: OutputStream): void;
    printHelpOn(arg0: Writer): void;
    // private putDependentOption(arg0: string[], arg1: OptionSpec<Object>, arg2: JavaMap<string[], OptionSpec<Object>[]>): void;
    recognize(arg0: AbstractOptionSpec<Object>): void;
    recognizeAlternativeLongOptions(arg0: boolean): void;
    recognizedOptions(): JavaMap<string, OptionSpec<Object>>;
    requiredIf(arg0: string[], arg1: OptionSpec<Object>): void;
    requiredIf(arg0: string[], arg1: string): void;
    requiredUnless(arg0: string[], arg1: OptionSpec<Object>): void;
    requiredUnless(arg0: string[], arg1: string): void;
    // private reset(): void;
    // private specFor(arg0: string): AbstractOptionSpec<Object>;
    // private unavailableOptions(arg0: OptionSet): AbstractOptionSpec<Object>[];
    // private validateOptionCharacters(arg0: string[]): void;
}