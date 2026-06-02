import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Hasher extends Ops, Object{
    hash(): number;
    reset(): void;
}