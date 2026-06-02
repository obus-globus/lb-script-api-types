import type { Object } from '../../../java/lang/Object.d.ts'
export class State extends Object {
    constructor()
    constructor(arg0: State)
    // private active: boolean;
    // private parent: boolean;
    // private sawElse: boolean;
    isActive(): boolean;
    isParentActive(): boolean;
    sawElse(): boolean;
    setActive(arg0: boolean): void;
    setParentActive(arg0: boolean): void;
    setSawElse(): void;
    toString(): string;
}