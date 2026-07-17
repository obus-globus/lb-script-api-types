import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { DeviceCode } from '../../../../com/microsoft/aad/msal4j/DeviceCode.d.ts'
import type { DeviceCodeFlowParameters } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private deviceCodeConsumer: (param0: DeviceCode) => void;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private scopes: string[];
    // private tenant: string;
    build(): DeviceCodeFlowParameters;
    claims(arg0: ClaimsRequest): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    deviceCodeConsumer(arg0: (param0: DeviceCode) => void): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    extraHttpHeaders(arg0: JavaMap<string, string>): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    extraQueryParameters(arg0: JavaMap<string, string>): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    scopes(arg0: string[]): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    tenant(arg0: string): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    toString(): string;
}