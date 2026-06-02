import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CredentialTypeEnum extends Enum<CredentialTypeEnum> {
    static ACCESS_TOKEN: CredentialTypeEnum;
    static ID_TOKEN: CredentialTypeEnum;
    static REFRESH_TOKEN: CredentialTypeEnum;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CredentialTypeEnum;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private value: string;
    value(): string;
    name(): "ACCESS_TOKEN" | "REFRESH_TOKEN" | "ID_TOKEN";
}