import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DataPackConfig extends Object {
    static CODEC: Codec<DataPackConfig>;
    static DEFAULT: DataPackConfig;
    constructor(enabled: string[], disabled: string[])
    readonly disabled: string[];
    readonly enabled: string[];
    getDisabled(): string[];
    getEnabled(): string[];
}