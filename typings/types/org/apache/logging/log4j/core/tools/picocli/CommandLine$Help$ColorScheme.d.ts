import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$Help$Ansi } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi.d.ts'
import type { CommandLine$Help$Ansi$IStyle } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$IStyle.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
export class CommandLine$Help$ColorScheme extends Object {
    constructor()
    constructor(ansi: CommandLine$Help$Ansi)
    // private ansi: CommandLine$Help$Ansi;
    commandStyles: CommandLine$Help$Ansi$IStyle[];
    optionParamStyles: CommandLine$Help$Ansi$IStyle[];
    optionStyles: CommandLine$Help$Ansi$IStyle[];
    parameterStyles: CommandLine$Help$Ansi$IStyle[];
    // private addAll(styles: CommandLine$Help$Ansi$IStyle[], ...add: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$ColorScheme;
    ansi(): CommandLine$Help$Ansi;
    applySystemProperties(): CommandLine$Help$ColorScheme;
    commandText(command: string): CommandLine$Help$Ansi$Text;
    commands(...styles: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$ColorScheme;
    optionParamText(optionParam: string): CommandLine$Help$Ansi$Text;
    optionParams(...styles: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$ColorScheme;
    optionText(option: string): CommandLine$Help$Ansi$Text;
    options(...styles: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$ColorScheme;
    parameterText(parameter: string): CommandLine$Help$Ansi$Text;
    parameters(...styles: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$ColorScheme;
    // private replace(styles: CommandLine$Help$Ansi$IStyle[], property: string): void;
}