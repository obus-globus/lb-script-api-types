import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundTypeBuilder$RegistrationType } from '../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder$RegistrationType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SoundTypeBuilderImpl$Entry extends Record {
    constructor(name: Identifier, type: SoundTypeBuilder$RegistrationType, volume: number, pitch: number, weight: number, attenuationDistance: number, stream: boolean, preload: boolean)
    // private attenuationDistance: number;
    // private name: Identifier;
    // private pitch: number;
    // private preload: boolean;
    // private stream: boolean;
    // private type: SoundTypeBuilder$RegistrationType;
    // private volume: number;
    // private weight: number;
    attenuationDistance(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): Identifier;
    pitch(): number;
    preload(): boolean;
    stream(): boolean;
    toString(): string;
    type(): SoundTypeBuilder$RegistrationType;
    volume(): number;
    weight(): number;
}