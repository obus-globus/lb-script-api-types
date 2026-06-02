import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { CommandLine$Help$Ansi$IStyle } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$IStyle.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
export class CommandLine$Help$Ansi extends Enum<CommandLine$Help$Ansi> {
    static AUTO: CommandLine$Help$Ansi;
    static OFF: CommandLine$Help$Ansi;
    static ON: CommandLine$Help$Ansi;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CommandLine$Help$Ansi;
    static values(): (Object | null)[];
    private constructor()
    apply(plainText: string, styles: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$Ansi$Text;
    enabled(): boolean;
    name(): "AUTO" | "ON" | "OFF";
}