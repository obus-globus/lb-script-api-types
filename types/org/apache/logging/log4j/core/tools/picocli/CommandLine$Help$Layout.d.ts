import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
import type { CommandLine$Help$ColorScheme } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$ColorScheme.d.ts'
import type { CommandLine$Help$IOptionRenderer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$IOptionRenderer.d.ts'
import type { CommandLine$Help$IParamLabelRenderer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$IParamLabelRenderer.d.ts'
import type { CommandLine$Help$IParameterRenderer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$IParameterRenderer.d.ts'
import type { CommandLine$Help$TextTable } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$TextTable.d.ts'
export class CommandLine$Help$Layout extends Object {
    constructor(colorScheme: CommandLine$Help$ColorScheme)
    constructor(colorScheme: CommandLine$Help$ColorScheme, textTable: CommandLine$Help$TextTable)
    constructor(colorScheme: CommandLine$Help$ColorScheme, textTable: CommandLine$Help$TextTable, optionRenderer: CommandLine$Help$IOptionRenderer, parameterRenderer: CommandLine$Help$IParameterRenderer)
    // private colorScheme: CommandLine$Help$ColorScheme;
    // private optionRenderer: CommandLine$Help$IOptionRenderer;
    // private parameterRenderer: CommandLine$Help$IParameterRenderer;
    // private table: CommandLine$Help$TextTable;
    addOption(field: Field, paramLabelRenderer: CommandLine$Help$IParamLabelRenderer): void;
    addOptions(fields: Field[], paramLabelRenderer: CommandLine$Help$IParamLabelRenderer): void;
    addPositionalParameter(field: Field, paramLabelRenderer: CommandLine$Help$IParamLabelRenderer): void;
    addPositionalParameters(fields: Field[], paramLabelRenderer: CommandLine$Help$IParamLabelRenderer): void;
    layout(field: Field, cellValues: CommandLine$Help$Ansi$Text[][]): void;
    toString(): string;
}