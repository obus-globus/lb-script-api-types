import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AzureCloudEndpoint extends Enum<AzureCloudEndpoint> {
    static AzureChina: AzureCloudEndpoint;
    static AzureGermany: AzureCloudEndpoint;
    static AzurePublic: AzureCloudEndpoint;
    static AzureUsGovernment: AzureCloudEndpoint;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AzureCloudEndpoint;
    static values(): AzureCloudEndpoint[];
    private constructor(arg2: string)
    endpoint: string;
    name(): "AzurePublic" | "AzureChina" | "AzureGermany" | "AzureUsGovernment";
}