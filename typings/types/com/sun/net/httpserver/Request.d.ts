import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Request extends Object{
    getRequestHeaders(): { [key: string]: any };
    getRequestMethod(): string;
    getRequestURI(): URI;
    with(arg0: string, arg1: string[]): Request;
}