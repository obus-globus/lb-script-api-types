import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmEffect } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmEffect.d.ts'
export class KmContract extends Object {
    constructor()
    readonly effects: KmEffect[];
    getEffects(): KmEffect[];
}