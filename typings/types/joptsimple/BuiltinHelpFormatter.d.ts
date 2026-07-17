import type { JavaMap } from '../JavaMap.d.ts'
import type { StringBuilder } from '../java/lang/StringBuilder.d.ts'
import type { HelpFormatter } from '../joptsimple/HelpFormatter.d.ts'
import type { OptionDescriptor } from '../joptsimple/OptionDescriptor.d.ts'
import type { Rows } from '../joptsimple/internal/Rows.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class BuiltinHelpFormatter extends Object implements HelpFormatter {
    constructor()
    constructor(arg0: number, arg1: number)
    // private nonOptionRows: Rows;
    // private optionRows: Rows;
    addHeaders(arg0: OptionDescriptor[]): void;
    addNonOptionRow(arg0: string): void;
    addNonOptionsDescription(arg0: OptionDescriptor[]): void;
    addOptionRow(arg0: string): void;
    addOptionRow(arg0: string, arg1: string): void;
    addOptions(arg0: OptionDescriptor[]): void;
    addRows(arg0: OptionDescriptor[]): void;
    appendOptionHelp(arg0: StringBuilder, arg1: string, arg2: string, arg3: boolean): void;
    appendTypeIndicator(arg0: StringBuilder, arg1: string, arg2: string, arg3: string, arg4: string): void;
    createDefaultValuesDisplay(arg0: (Object | null)[]): string;
    createDescriptionDisplay(arg0: OptionDescriptor): string;
    createNonOptionArgumentsDisplay(arg0: OptionDescriptor): string;
    createOptionDisplay(arg0: OptionDescriptor): string;
    extractTypeIndicator(arg0: OptionDescriptor): string;
    findAndRemoveNonOptionsSpec(arg0: OptionDescriptor[]): OptionDescriptor;
    fitRowsToWidth(): void;
    format(arg0: JavaMap<string, OptionDescriptor>): string;
    formattedHelpOutput(): string;
    hasRequiredOption(arg0: OptionDescriptor[]): boolean;
    maybeAppendNonOptionsDescription(arg0: StringBuilder, arg1: OptionDescriptor): void;
    maybeAppendOptionInfo(arg0: StringBuilder, arg1: OptionDescriptor): void;
    message(arg0: string, ...arg1: Object[]): string;
    nonOptionOutput(): string;
    optionLeader(arg0: string): string;
    optionOutput(): string;
    shouldShowNonOptionArgumentDisplay(arg0: OptionDescriptor): boolean;
}