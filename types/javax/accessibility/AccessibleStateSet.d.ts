import type { AccessibleState } from '../../javax/accessibility/AccessibleState.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AccessibleStateSet extends Object {
    constructor()
    constructor(arg0: AccessibleState[])
    // private states: AccessibleState[];
    add(arg0: AccessibleState): boolean;
    addAll(arg0: AccessibleState[]): void;
    clear(): void;
    contains(arg0: AccessibleState): boolean;
    remove(arg0: AccessibleState): boolean;
    toArray(): AccessibleState[];
    toString(): string;
}