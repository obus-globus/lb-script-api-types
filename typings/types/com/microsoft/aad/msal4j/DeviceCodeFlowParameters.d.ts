import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { DeviceCode } from '../../../../com/microsoft/aad/msal4j/DeviceCode.d.ts'
import type { DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceCodeFlowParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: (param0: DeviceCode) => void): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    private constructor(arg0: string[], arg1: (param0: DeviceCode) => void, arg2: ClaimsRequest, arg3: JavaMap<string, string>, arg4: JavaMap<string, string>, arg5: string)
    // private claims: ClaimsRequest;
    // private deviceCodeConsumer: (param0: DeviceCode) => void;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private scopes: string[];
    // private tenant: string;
    claims(): ClaimsRequest;
    deviceCodeConsumer(): (param0: DeviceCode) => void;
    extraHttpHeaders(): JavaMap<string, string>;
    extraQueryParameters(): JavaMap<string, string>;
    scopes(): string[];
    tenant(): string;
}