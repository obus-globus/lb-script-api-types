import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { RpcClient$CaseInsensitiveKey } from '../../../../ai/djl/engine/rpc/RpcClient$CaseInsensitiveKey.d.ts'
import type { Input } from '../../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../../ai/djl/modality/Output.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RpcClient extends Object {
    static getClient(paramarg0: JavaMap<string, Object>): RpcClient;
    private constructor(arg0: URL, arg1: string, arg2: JavaMap<RpcClient$CaseInsensitiveKey, string>)
    // private headers: JavaMap<RpcClient$CaseInsensitiveKey, string>;
    // private method: string;
    // private url: URL;
    send(arg0: Input): Output;
}