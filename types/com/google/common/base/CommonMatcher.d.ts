import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CommonMatcher extends Object {
    constructor()
    end(): number;
    find(): boolean;
    find(index: number): boolean;
    matches(): boolean;
    replaceAll(replacement: string): string;
    start(): number;
}