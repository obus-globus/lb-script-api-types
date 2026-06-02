import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class State extends Object {
    constructor()
    constructor(other: State)
    // private state: number;
    get(): number;
    isLiteral(): boolean;
    reset(): void;
    set(other: State): void;
    updateLiteral(): void;
    updateLongRep(): void;
    updateMatch(): void;
    updateShortRep(): void;
}