import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
export class TruffleLanguage$ParsingRequest extends Object {
    constructor(source: Source, optionValues: OptionValues, argumentNames: string[])
    readonly argumentNames: string[];
    // private disposed: boolean;
    readonly optionValues: OptionValues;
    readonly source: Source;
    dispose(): void;
    getArgumentNames(): string[];
    getOptionValues(): OptionValues;
    getSource(): Source;
    parse(truffleLanguage: TruffleLanguage<Object>): CallTarget;
}