import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export interface StringValues extends Object {
    readonly caseInsensitiveName: boolean;
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    entries(): Map$Entry<string, string[]>[];
    forEach(body: (param0: string, param1: string[]) => void): void;
    get(name: string): string | null;
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
}