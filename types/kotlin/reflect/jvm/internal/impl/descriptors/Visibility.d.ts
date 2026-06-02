import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Visibility extends Object {
    constructor(arg0: string, arg1: boolean)
    // private isPublicAPI: boolean;
    // private name: string;
    compareTo(arg0: Visibility): number;
    getInternalDisplayName(): string;
    isPublicAPI(): boolean;
    normalize(): Visibility;
    toString(): string;
}