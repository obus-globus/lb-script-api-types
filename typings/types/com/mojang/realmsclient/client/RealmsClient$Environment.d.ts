import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsClient$Environment extends Enum<RealmsClient$Environment> {
    static LOCAL: RealmsClient$Environment;
    static PRODUCTION: RealmsClient$Environment;
    static STAGE: RealmsClient$Environment;
    static byName(paramname: string): Optional<RealmsClient$Environment>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RealmsClient$Environment;
    static values(): RealmsClient$Environment[];
    private constructor(baseUrl: string, alternativeUrl: string, protocol: string)
    alternativeUrl: string;
    baseUrl: string;
    protocol: string;
    name(): "PRODUCTION" | "STAGE" | "LOCAL";
}