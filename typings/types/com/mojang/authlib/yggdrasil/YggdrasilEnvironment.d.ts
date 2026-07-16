import type { Environment } from '../../../../com/mojang/authlib/Environment.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class YggdrasilEnvironment extends Enum<YggdrasilEnvironment> {
    static PROD: YggdrasilEnvironment;
    static STAGING: YggdrasilEnvironment;
    static fromString(paramarg0: string): Optional<Environment>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): YggdrasilEnvironment;
    static values(): YggdrasilEnvironment[];
    private constructor(arg2: string, arg3: string, arg4: string)
    readonly environment: Environment;
    getEnvironment(): Environment;
    name(): "PROD" | "STAGING";
}