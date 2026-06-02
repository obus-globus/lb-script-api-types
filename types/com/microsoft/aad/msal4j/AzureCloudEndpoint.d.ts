import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AzureCloudEndpoint extends Enum<AzureCloudEndpoint> {
    static AzureChina: AzureCloudEndpoint;
    static AzureGermany: AzureCloudEndpoint;
    static AzurePublic: AzureCloudEndpoint;
    static AzureUsGovernment: AzureCloudEndpoint;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AzureCloudEndpoint;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    endpoint: string;
    name(): "AzurePublic" | "AzureChina" | "AzureGermany" | "AzureUsGovernment";
}