import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ConfigSyntax extends Enum<ConfigSyntax> {
    static CONF: ConfigSyntax;
    static JSON: ConfigSyntax;
    static PROPERTIES: ConfigSyntax;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ConfigSyntax;
    static values(): ConfigSyntax[];
    private constructor()
    name(): "JSON" | "CONF" | "PROPERTIES";
}