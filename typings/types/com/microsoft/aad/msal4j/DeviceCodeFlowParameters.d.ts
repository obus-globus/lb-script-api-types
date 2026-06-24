import type { DeviceCodeFlowParameters$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { DeviceCode } from '../../../../com/microsoft/aad/msal4j/DeviceCode.d.ts'
import type { DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceCodeFlowParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: (param0: DeviceCode) => void): DeviceCodeFlowParameters$DeviceCodeFlowParametersBuilder;
    private constructor(arg0: string[], arg1: (param0: DeviceCode) => void, arg2: ClaimsRequest, arg3: { [key: string]: string }, arg4: { [key: string]: string }, arg5: string)
    constructor(arg0: (Object | null)[], arg1: (param0: Object) => void, arg2: ClaimsRequest, arg3: Map<Object | null, Object | null>, arg4: Map<Object | null, Object | null>, arg5: string, arg6: DeviceCodeFlowParameters$1)
    // private claims: ClaimsRequest;
    // private deviceCodeConsumer: (param0: DeviceCode) => void;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private scopes: string[];
    // private tenant: string;
    claims(): ClaimsRequest;
    deviceCodeConsumer(): (param0: DeviceCode) => void;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    scopes(): string[];
    tenant(): string;
}