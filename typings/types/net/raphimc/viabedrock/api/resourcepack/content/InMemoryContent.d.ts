import type { Content } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
export class InMemoryContent extends Content {
    constructor()
    // private content: { [key: string]: number[] };
    contains(arg0: string): boolean;
    get(arg0: string): number[];
    getFilesDeep(arg0: string, arg1: string): string[];
    getFilesShallow(arg0: string, arg1: string): string[];
    put(arg0: string, arg1: number[]): boolean;
    size(): number;
}