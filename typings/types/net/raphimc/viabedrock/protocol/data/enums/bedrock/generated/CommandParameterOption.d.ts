import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CommandParameterOption extends Enum<CommandParameterOption> {
    static EnumAsChainedCommand: CommandParameterOption;
    static EnumAutocompleteExpansion: CommandParameterOption;
    static HasSemanticConstraint: CommandParameterOption;
    static None: CommandParameterOption;
    static getByName(paramarg0: string): CommandParameterOption;
    static getByName(paramarg0: string, paramarg1: CommandParameterOption): CommandParameterOption;
    static getByValue(paramarg0: number): CommandParameterOption;
    static getByValue(paramarg0: number, paramarg1: CommandParameterOption): CommandParameterOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CommandParameterOption;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: CommandParameterOption)
    readonly value: number;
    getValue(): number;
    name(): "None" | "EnumAutocompleteExpansion" | "HasSemanticConstraint" | "EnumAsChainedCommand";
}