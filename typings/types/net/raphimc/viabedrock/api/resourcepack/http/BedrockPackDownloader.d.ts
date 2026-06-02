import type { HttpURLConnection } from '../../../../../../java/net/HttpURLConnection.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BedrockPackDownloader extends Object {
    constructor(arg0: URL)
    // private url: URL;
    // private checkResponseCode(arg0: HttpURLConnection): void;
    // private createConnection(): HttpURLConnection;
    download(): number[];
    getContentLength(): number;
}