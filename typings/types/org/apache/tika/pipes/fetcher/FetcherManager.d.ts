import type { ConfigBase } from '../../../../../org/apache/tika/config/ConfigBase.d.ts'
import type { Fetcher } from '../../../../../org/apache/tika/pipes/fetcher/Fetcher.d.ts'
export class FetcherManager extends ConfigBase {
    static load(paramarg0: Path[][]): FetcherManager;
    constructor(arg0: Fetcher[])
    // private fetcherMap: { [key: string]: Fetcher };
    getFetcher(): Fetcher;
    getFetcher(arg0: string): Fetcher;
    getSupported(): string[];
}