import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClientItem$Properties extends Record {
    static DEFAULT: ClientItem$Properties;
    static MAP_CODEC: MapCodec<ClientItem$Properties>;
    // private handAnimationOnSwap: boolean;
    // private oversizedInGui: boolean;
    // private swapAnimationScale: number;
    equals(o: Object | null): boolean;
    handAnimationOnSwap(): boolean;
    hashCode(): number;
    oversizedInGui(): boolean;
    swapAnimationScale(): number;
    toString(): string;
}