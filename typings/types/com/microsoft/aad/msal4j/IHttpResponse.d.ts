import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IHttpResponse extends Object{
    body(): string;
    headers(): JavaMap<string, string[]>;
    statusCode(): number;
}