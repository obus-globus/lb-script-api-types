import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ManagedIdentitySourceType extends Enum<ManagedIdentitySourceType> {
    static APP_SERVICE: ManagedIdentitySourceType;
    static AZURE_ARC: ManagedIdentitySourceType;
    static CLOUD_SHELL: ManagedIdentitySourceType;
    static DEFAULT_TO_IMDS: ManagedIdentitySourceType;
    static IMDS: ManagedIdentitySourceType;
    static NONE: ManagedIdentitySourceType;
    static SERVICE_FABRIC: ManagedIdentitySourceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ManagedIdentitySourceType;
    static values(): ManagedIdentitySourceType[];
    private constructor()
    name(): "NONE" | "IMDS" | "APP_SERVICE" | "AZURE_ARC" | "CLOUD_SHELL" | "SERVICE_FABRIC" | "DEFAULT_TO_IMDS";
}