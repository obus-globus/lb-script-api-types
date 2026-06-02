import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WorldDownload extends Record {
    static parse(paramjson: string): WorldDownload;
    constructor(downloadLink: string, resourcePackUrl: string, resourcePackHash: string)
    // private downloadLink: string;
    // private resourcePackHash: string;
    // private resourcePackUrl: string;
    downloadLink(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resourcePackHash(): string;
    resourcePackUrl(): string;
    toString(): string;
}