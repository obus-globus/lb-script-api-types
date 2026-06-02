import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParticleRenderType extends Record {
    static ELDER_GUARDIANS: ParticleRenderType;
    static ITEM_PICKUP: ParticleRenderType;
    static NO_RENDER: ParticleRenderType;
    static SINGLE_QUADS: ParticleRenderType;
    constructor(name: string)
    // private name: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}