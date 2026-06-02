import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { DeviceCode } from '../../../../com/microsoft/aad/msal4j/DeviceCode.d.ts'
import type { DeviceCodeFlowParameters } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private deviceCodeConsumer: (param0: DeviceCode) => void;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private scopes: string[];
    // private tenant: string;
    build(): DeviceCodeFlowParameters;
    claims(arg0: ClaimsRequest): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    deviceCodeConsumer(arg0: (param0: DeviceCode) => void): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    extraHttpHeaders(arg0: { [key: string]: string }): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    extraQueryParameters(arg0: { [key: string]: string }): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    scopes(arg0: string[]): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    tenant(arg0: string): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    toString(): string;
}