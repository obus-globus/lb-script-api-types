import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsClient$Environment extends Enum<RealmsClient$Environment> {
    static LOCAL: RealmsClient$Environment;
    static PRODUCTION: RealmsClient$Environment;
    static STAGE: RealmsClient$Environment;
    static byName(paramname: string): Optional<RealmsClient$Environment>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RealmsClient$Environment;
    static values(): (Object | null)[];
    private constructor(baseUrl: string, alternativeUrl: string, protocol: string)
    alternativeUrl: string;
    baseUrl: string;
    protocol: string;
    name(): "PRODUCTION" | "STAGE" | "LOCAL";
}