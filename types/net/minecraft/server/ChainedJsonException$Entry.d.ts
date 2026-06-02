import type { Object } from '../../../java/lang/Object.d.ts'
export class ChainedJsonException$Entry extends Object {
    private constructor()
    readonly filename: string;
    readonly jsonKeys: string[];
    // private addJsonKey(name: string): void;
    getFilename(): string;
    getJsonKeys(): string;
    toString(): string;
}