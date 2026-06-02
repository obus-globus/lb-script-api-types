import type { Object } from '../../../java/lang/Object.d.ts'
export class StackChunk extends Object {
    static init(): void;
    constructor()
    // private bottom: number;
    // private parent: StackChunk;
    // private size: number;
    // private sp: number;
    isEmpty(): boolean;
    parent(): StackChunk;
}