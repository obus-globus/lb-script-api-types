import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CommandLine$Help$Column$Overflow extends Enum<CommandLine$Help$Column$Overflow> {
    static SPAN: CommandLine$Help$Column$Overflow;
    static TRUNCATE: CommandLine$Help$Column$Overflow;
    static WRAP: CommandLine$Help$Column$Overflow;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CommandLine$Help$Column$Overflow;
    static values(): CommandLine$Help$Column$Overflow[];
    private constructor()
    name(): "TRUNCATE" | "SPAN" | "WRAP";
}