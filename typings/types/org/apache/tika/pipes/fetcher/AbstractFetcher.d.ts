import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Fetcher } from '../../../../../org/apache/tika/pipes/fetcher/Fetcher.d.ts'
export abstract class AbstractFetcher extends Object implements Fetcher {
    constructor()
    constructor(arg0: string)
    readonly name: string;
    getName(): string;
    setName(arg0: string): void;
}