import type { NodeCloneable } from '../../../../../com/oracle/truffle/api/nodes/NodeCloneable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Profile extends NodeCloneable {
    constructor()
    disable(): void;
    reset(): void;
    toString(): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
    toStringDisabled(): string;
}