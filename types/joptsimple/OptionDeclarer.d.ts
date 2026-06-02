import type { NonOptionArgumentSpec } from '../joptsimple/NonOptionArgumentSpec.d.ts'
import type { OptionSpecBuilder } from '../joptsimple/OptionSpecBuilder.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface OptionDeclarer extends Object{
    accepts(arg0: string): OptionSpecBuilder;
    accepts(arg0: string, arg1: string): OptionSpecBuilder;
    acceptsAll(arg0: string[]): OptionSpecBuilder;
    acceptsAll(arg0: string[], arg1: string): OptionSpecBuilder;
    allowsUnrecognizedOptions(): void;
    nonOptions(): NonOptionArgumentSpec<string>;
    nonOptions(arg0: string): NonOptionArgumentSpec<string>;
    posixlyCorrect(arg0: boolean): void;
    recognizeAlternativeLongOptions(arg0: boolean): void;
}