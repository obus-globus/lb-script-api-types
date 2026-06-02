import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EmitKey extends Object implements Serializable {
    static NO_EMIT: EmitKey;
    constructor()
    constructor(arg0: string, arg1: string)
    readonly emitKey: string;
    readonly emitterName: string;
    equals(arg0: Object | null): boolean;
    getEmitKey(): string;
    getEmitterName(): string;
    hashCode(): number;
    toString(): string;
}