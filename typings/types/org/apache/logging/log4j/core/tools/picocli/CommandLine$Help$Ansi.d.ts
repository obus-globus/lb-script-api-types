import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { CommandLine$Help$Ansi$IStyle } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$IStyle.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
export class CommandLine$Help$Ansi extends Enum<CommandLine$Help$Ansi> {
    static AUTO: CommandLine$Help$Ansi;
    static OFF: CommandLine$Help$Ansi;
    static ON: CommandLine$Help$Ansi;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CommandLine$Help$Ansi;
    static values(): CommandLine$Help$Ansi[];
    private constructor()
    apply(plainText: string, styles: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$Ansi$Text;
    enabled(): boolean;
    name(): "AUTO" | "ON" | "OFF";
}