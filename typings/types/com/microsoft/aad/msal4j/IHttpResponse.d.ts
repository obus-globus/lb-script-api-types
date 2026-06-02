import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IHttpResponse extends Object{
    body(): string;
    headers(): { [key: string]: string[] };
    statusCode(): number;
}